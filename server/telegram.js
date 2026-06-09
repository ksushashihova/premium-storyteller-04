// server/telegram.js
import { pool } from "./db.js";
import fetch from "node-fetch";

// экранируем спецсимволы для Telegram HTML parse_mode
function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

if (!BOT_TOKEN) {
  console.warn("TELEGRAM_BOT_TOKEN is not set");
}
if (!CHAT_ID) {
  console.warn("TELEGRAM_CHAT_ID is not set");
}

export async function notifyAdminsNewWeddingLead(leadId) {
  try {
    const result = await pool.query(
      `SELECT id, created_at, name, phone, email, wedding_date, budget, message
       FROM public.wedding_leads
       WHERE id = $1`,
      [leadId]
    );

    if (result.rows.length === 0) {
      console.warn("Wedding lead not found for Telegram notify, id:", leadId);
      return;
    }

    const lead = result.rows[0];

    const lines = [
      "💍 Новый свадебный лид:",
      `ID: ${escapeHtml(lead.id)}`,
      `Время: ${escapeHtml(lead.created_at.toISOString?.() ?? lead.created_at)}`,
      `Имя: ${escapeHtml(lead.name)}`,
      `Телефон: ${escapeHtml(lead.phone)}`,
      `Email: ${escapeHtml(lead.email)}`,
    ];

    if (lead.wedding_date) {
      const dateStr =
        lead.wedding_date.toISOString?.().slice(0, 10) ?? lead.wedding_date;
      lines.push(`Дата свадьбы: ${escapeHtml(dateStr)}`);
    }
    if (lead.budget) {
      lines.push(`Бюджет: ${escapeHtml(lead.budget)}`);
    }
    if (lead.message) {
      lines.push("");
      lines.push(`Сообщение: ${escapeHtml(lead.message)}`);
    }

    const text = lines.join("\n");

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML",
      }),
    });

    if (!res.ok) {
      const data = await res.text();
      console.error("Telegram API error:", res.status, data);
    }
  } catch (err) {
    console.error("Telegram notify failed:", err);
  }
}