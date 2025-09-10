"use client";

import { useState } from "react";
import { invoke } from "@tauri-apps/api/core"; // Tauri v2

export default function Home() {
  const [name, setName] = useState("");
  const [reply, setReply] = useState<string>("");

  async function greet() {
    const msg = await invoke<string>("greet", { name });
    setReply(msg);
  }

  return (
    <main style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div style={{ width: 520 }}>
        <h1>Prism</h1>
        <p>Desktop UI powered by Next.js inside Tauri.</p>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ flex: 1, padding: 8 }}
          />
          <button onClick={greet} style={{ padding: "8px 12px" }}>Greet</button>
        </div>
        {reply && <p style={{ marginTop: 12 }}>{reply}</p>}
      </div>
    </main>
  );
}
