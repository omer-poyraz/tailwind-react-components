"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    try { const s = localStorage.getItem("theme"); if (s) setDark(s === "dark"); } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);
  return (
    <button onClick={() => setDark((d) => !d)} aria-label="Toggle theme"
      className="grid place-items-center w-9 h-9 rounded-lg border border-[var(--border)] hover:bg-[var(--surface-2)]">
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
