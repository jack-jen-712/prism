﻿#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
async fn greet(name: String) -> String {
    format!("Hello, {} — from Rust 👋", name)
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
