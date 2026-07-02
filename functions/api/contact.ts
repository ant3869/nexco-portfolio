// Cloudflare Pages Function: POST /api/contact
// Sends the contact form via Resend (https://resend.com).
// Requires environment variables set in the Pages project settings:
//   RESEND_API_KEY - API key from Resend
//   CONTACT_EMAIL  - where submissions are delivered (defaults below)

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_EMAIL?: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const onRequestPost = async (context: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  const { request, env } = context;

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400);
  }

  const name = payload.name?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const subject = payload.subject?.trim() ?? '';
  const message = payload.message?.trim() ?? '';

  if (!name || !email || !subject || !message) {
    return json({ error: 'All fields are required.' }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Invalid email address.' }, 400);
  }
  if (message.length > 5000 || subject.length > 200 || name.length > 100) {
    return json({ error: 'Message too long.' }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return json(
      { error: 'Contact form is not configured yet. Please email directly.' },
      503
    );
  }

  const to = env.CONTACT_EMAIL || 'anthon3869@gmail.com';
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [to],
      reply_to: email,
      subject: `[nexcomedia.com] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error('Resend error:', res.status, detail);
    return json({ error: 'Failed to send message. Please email directly.' }, 502);
  }

  return json({ ok: true });
};
