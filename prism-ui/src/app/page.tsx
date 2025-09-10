"use client";
import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-opener";

export default function Home() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <main style={{ padding: 24 }}>
      <h1>Prism UI</h1>
      <div style={{ display:"flex", gap:8 }}>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" style={{color:"#111", padding:8}} />
        <button onClick={async()=>setMsg(await invoke("greet",{name: name || "friend"}))}>Greet (Rust)</button>
        <button onClick={()=>open("https://tauri.app")}>Open tauri.app</button>
      </div>
      {msg && <pre style={{background:"#111",padding:12,borderRadius:8}}>{msg}</pre>}
    </main>
  );
}
