"use client";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { invoke } from "@tauri-apps/api/core";

export default function EngineTestPage() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  async function greet() {
    // invoke Rust command "greet" exposed by Tauri
    const msg = await invoke<string>("greet", { name });
    setGreeting(msg);
  }

  function onNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <main style={{ padding: 32 }}>
      <h1>Prism – engine test</h1>
      <input
        placeholder="Your name"
        value={name}
        onChange={onNameChange}
      />
      <button onClick={greet}>Greet</button>
      {greeting && <p style={{ marginTop: 12 }}>{greeting}</p>}
    </main>
  );
}