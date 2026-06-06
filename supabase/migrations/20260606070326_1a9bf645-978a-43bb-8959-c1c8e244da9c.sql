
CREATE OR REPLACE FUNCTION public.validate_lead()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF length(trim(NEW.name)) < 2 OR length(NEW.name) > 200 THEN
    RAISE EXCEPTION 'Invalid name';
  END IF;
  IF length(trim(NEW.phone)) < 5 OR length(NEW.phone) > 50 THEN
    RAISE EXCEPTION 'Invalid phone';
  END IF;
  IF NEW.email !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' OR length(NEW.email) > 320 THEN
    RAISE EXCEPTION 'Invalid email';
  END IF;
  IF NEW.message IS NOT NULL AND length(NEW.message) > 2000 THEN
    RAISE EXCEPTION 'Message too long';
  END IF;
  IF NEW.budget IS NOT NULL AND length(NEW.budget) > 200 THEN
    RAISE EXCEPTION 'Budget too long';
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS validate_lead_trigger ON public.leads;
CREATE TRIGGER validate_lead_trigger
BEFORE INSERT OR UPDATE ON public.leads
FOR EACH ROW EXECUTE FUNCTION public.validate_lead();
