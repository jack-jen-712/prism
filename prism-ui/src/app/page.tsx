"use client";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { invoke } from "@tauri-apps/api/core";
import { openUrl } from "@tauri-apps/plugin-opener";

export default function Home() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  async function greet() {
    const msg = await invoke<string>("greet", { name });
    setGreeting(msg);
  }

  async function openDocs() {
    try {
      // Inside Tauri: use the plugin
      if (typeof window !== "undefined" && (window as any).__TAURI__) {
        await openUrl("https://tauri.app");
      } else if (typeof window !== "undefined") {
        // Web/CI fallback so Next.js builds fine outside Tauri
        window.open("https://tauri.app", "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to open URL");
    }
  }

  function onNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <main style={{ padding: 32 }}>
      <h1>Prism</h1>
      <p>Desktop UI powered by Next.js inside Tauri.</p>
      <div style={{ display: "flex", gap: 8 }}>
        <input placeholder="Your name" value={name} onChange={onNameChange} />
        <button onClick={greet}>Greet</button>
        <button onClick={openDocs}>Open Tauri</button>
      </div>
      {greeting && <p style={{ marginTop: 12 }}>{greeting}</p>}
    </main>
  );
}