import { NextResponse } from "next/server";

// This endpoint runs on the Node.js runtime so it can later talk to Supabase
// with the service-role key (which must never be exposed to the client).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = {
  email?: unknown;
  company?: unknown; // honeypot
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot: a filled "company" field means a bot. Pretend success, drop it.
  if (typeof body.company === "string" && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true, message: "You're on the list." });
  }

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  try {
    await saveEmail(email);
  } catch (err) {
    console.error("[waitlist] failed to persist email", err);
    return NextResponse.json(
      { ok: false, message: "We couldn't save that just now. Try again?" },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "You're on the list. We'll email you the moment we launch.",
  });
}

/**
 * Placeholder persistence layer.
 *
 * Wire this to the existing Supabase backend later. Example (server-side only):
 *
 *   import { createClient } from "@supabase/supabase-js";
 *
 *   const supabase = createClient(
 *     process.env.NEXT_PUBLIC_SUPABASE_URL!,
 *     process.env.SUPABASE_SERVICE_ROLE_KEY!, // server-only, never NEXT_PUBLIC
 *     { auth: { persistSession: false } },
 *   );
 *
 *   async function saveEmail(email: string) {
 *     const { error } = await supabase
 *       .from(process.env.SUPABASE_WAITLIST_TABLE ?? "waitlist")
 *       .upsert({ email, source: "landing" }, { onConflict: "email" });
 *     if (error) throw error;
 *   }
 *
 * Until then we just log so the form is fully functional in development.
 */
async function saveEmail(email: string): Promise<void> {
  console.log(`[waitlist] new signup: ${email}`);
}
