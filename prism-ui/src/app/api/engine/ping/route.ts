import { NextResponse } from "next/server";
export async function GET() {
  const r = await fetch(`${process.env.ENGINE_URL ?? "http://127.0.0.1:8000"}/ping`, { cache: "no-store" });
  return NextResponse.json(await r.json());
}
