import { FORM_ID, FORM_MESSAGES, FORM_NAME, LEAD_FIELDS, type LeadResponse } from "@/lib/lead-form";

/**
 * Recebe o formulário de lead e repassa ao webhook do n8n no mesmo formato
 * que o Elementor Pro enviava (x-www-form-urlencoded, chaves = rótulos dos
 * campos + metadados + form_id/form_name).
 *
 * Configure LEAD_WEBHOOK_URL no ambiente (ver .env.example).
 */

// Títulos dos metadados como o Elementor (pt-BR) enviava junto com os campos
const META_TITLES = {
  date: "Data",
  time: "Hora",
  pageUrl: "URL da página",
  userAgent: "Agente de usuário",
  remoteIp: "IP remoto",
  credit: "Desenvolvido por",
};

const TIME_ZONE = "America/Sao_Paulo";

function json(body: LeadResponse) {
  return Response.json(body);
}

/** Equivalente ao sanitize_text_field do WordPress (remove tags, quebras e espaços extras). */
function sanitizeText(value: string) {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[\r\n\t ]+/g, " ")
    .trim();
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clientIp(request: Request) {
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    ""
  );
}

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return json({ success: false, data: { message: FORM_MESSAGES.error } });
  }

  const payload = new URLSearchParams();
  const errors: Record<string, string> = {};

  for (const field of LEAD_FIELDS) {
    const raw = formData.get(`form_fields[${field.id}]`);
    const value = sanitizeText(typeof raw === "string" ? raw : "");

    if (field.required && value === "") errors[field.id] = FORM_MESSAGES.required;
    else if (field.type === "email" && value !== "" && !isEmail(value)) errors[field.id] = FORM_MESSAGES.invalidEmail;
    else if (field.type === "select" && value !== "" && !field.options?.includes(value)) errors[field.id] = FORM_MESSAGES.invalid;

    payload.append(field.label, value);
  }

  if (Object.keys(errors).length > 0) {
    return json({ success: false, data: { message: FORM_MESSAGES.invalid, errors } });
  }

  const now = new Date();
  const referrer = formData.get("referrer");
  payload.append(
    META_TITLES.date,
    new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: TIME_ZONE }).format(now),
  );
  payload.append(
    META_TITLES.time,
    new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: TIME_ZONE }).format(now),
  );
  payload.append(META_TITLES.pageUrl, typeof referrer === "string" ? referrer : "");
  payload.append(META_TITLES.userAgent, request.headers.get("user-agent") ?? "");
  payload.append(META_TITLES.remoteIp, clientIp(request));
  payload.append(META_TITLES.credit, "Elementor");
  payload.append("form_id", FORM_ID);
  payload.append("form_name", FORM_NAME);

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[lead] LEAD_WEBHOOK_URL não configurada");
    return json({ success: false, data: { message: FORM_MESSAGES.error } });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
      signal: AbortSignal.timeout(10_000),
    });
    if (response.status !== 200) {
      console.error(`[lead] webhook respondeu ${response.status}`);
      return json({ success: false, data: { message: FORM_MESSAGES.error } });
    }
  } catch (error) {
    console.error("[lead] falha ao chamar o webhook", error);
    return json({ success: false, data: { message: FORM_MESSAGES.error } });
  }

  return json({ success: true, data: { message: FORM_MESSAGES.success } });
}
