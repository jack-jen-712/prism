import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Prism UI" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui", background: "#0b0b0b", color: "#eaeaea" }}>
        {children}
      </body>
    </html>
  );
}