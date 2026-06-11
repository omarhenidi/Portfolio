import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";
import { isValidEmail, sendContactEmail } from "@/lib/email";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const LIMITS = {
  name: 100,
  email: 254,
  message: 5000,
} as const;

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    return NextResponse.json({ error: "Invalid request." }, { status: 415 });
  }

  const ip = getClientIp(request);
  if (!rateLimit(`contact:${ip}`, 5, 60_000)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }

  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    const company = String(body.company ?? "").trim();

    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }

    if (name.length > LIMITS.name) {
      return NextResponse.json({ error: "Name is too long." }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (email.length > LIMITS.email) {
      return NextResponse.json({ error: "Email is too long." }, { status: 400 });
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Please enter a message of at least 10 characters." },
        { status: 400 },
      );
    }

    if (message.length > LIMITS.message) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    await sendContactEmail({ name, email, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: `Unable to send your message right now. Please email ${SITE.email} directly.`,
      },
      { status: 500 },
    );
  }
}
