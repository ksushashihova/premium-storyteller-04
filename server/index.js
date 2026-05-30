// server/index.js
import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { pool } from "./db.js";
import { notifyAdminsNewWeddingLead } from "./telegram.js";

const app = express();
const PORT = process.env.PORT || 4030;

// __dirname для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// путь к Vite-сборке (dist рядом с server/)
const distPath = path.join(__dirname, "..", "dist");
console.log("Serving static from:", distPath);

// статика из dist
app.use(express.static(distPath));

// JSON / CORS
app.use(cors());
app.use(express.json({ limit: "100kb" }));

// всё, что не /api, отдаём index.html (SPA)
app.get(/^\/(?!api).*/, (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// приём свадебного лида
app.post("/api/leads", async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      wedding_date,
      budget,
      message,
    } = req.body || {};

    const safeName = (name ?? "").toString().trim().slice(0, 200);
    const safePhone = (phone ?? "").toString().trim().slice(0, 50);
    const safeEmail = (email ?? "").toString().trim().slice(0, 320);
    const safeBudget = (budget ?? "").toString().trim().slice(0, 200);
    const safeMessage = (message ?? "").toString().trim().slice(0, 2000);
    const safeWeddingDate = wedding_date ? new Date(wedding_date) : null;

    if (!safeName || !safePhone || !safeEmail) {
      return res
        .status(400)
        .json({ error: "name, phone and email are required" });
    }

    const insertQuery = `
      INSERT INTO public.wedding_leads (name, phone, email, wedding_date, budget, message)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id, created_at;
    `;

    const result = await pool.query(insertQuery, [
      safeName,
      safePhone,
      safeEmail,
      safeWeddingDate instanceof Date &&
      !isNaN(safeWeddingDate.valueOf())
        ? safeWeddingDate.toISOString().slice(0, 10)
        : null,
      safeBudget || null,
      safeMessage || null,
    ]);

    const lead = result.rows[0];

    // Telegram — не блокируем ответ
    notifyAdminsNewWeddingLead(lead.id).catch((err) => {
      console.error("Telegram notify failed:", err);
    });

    return res.status(201).json({
      id: lead.id,
      created_at: lead.created_at,
    });
  } catch (err) {
    console.error("Error inserting wedding lead:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// просмотр лидов (для админки/теста)
app.get("/api/leads", async (_req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, created_at, name, phone, email, wedding_date, budget, message
       FROM public.wedding_leads
       ORDER BY created_at DESC
       LIMIT 100;`
    );

    return res.json(result.rows);
  } catch (err) {
    console.error("Error fetching wedding leads:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Wedding leads backend is running on port ${PORT}`);
});