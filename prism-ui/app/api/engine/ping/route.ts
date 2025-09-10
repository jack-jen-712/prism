import { NextResponse } from "next/server";

export async function GET() {
  const r = await fetch(`${process.env.ENGINE_URL}/ping`, { cache: "no-store" });
  const data = await r.json();
  return NextResponse.json(data);
}
