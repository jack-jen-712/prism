"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch("/api/engine/ping").then(r => r.json()).then(setData);
  }, []);
  return <pre style={{padding:16}}>{JSON.stringify(data, null, 2)}</pre>;
}
