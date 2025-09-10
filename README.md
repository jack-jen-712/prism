# Prism

Desktop UI (Next.js + Tauri) with a Python engine for on-demand valuation.

## Dev
pnpm i
pnpm -C prism-ui dev         # UI
pnpm -C prism-desktop tauri  # Desktop shell

## Structure
- prism-ui/        Next.js app
- prism-desktop/   Tauri shell
- prism-engine/    Python engine (FastAPI)

## Env
Copy \.env.example\ to \.env.local\ or \prism-engine/.env\ and adjust.
