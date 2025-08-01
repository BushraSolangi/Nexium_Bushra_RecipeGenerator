// app/api/chefbot/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  const res = await fetch(process.env.N8N_WEBHOOK_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: message }),
  });

  const data = await res.json();
  return NextResponse.json({ reply: data.reply });
}
