"use client";

import { useEffect, useState } from "react";

import { useTheme } from "@teispace/next-themes";

export default function LightSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="cursor-pointer hover:underline underline-offset-2">
      <i>{theme === "dark" ? "Let there be light" : "Let there be dark"}</i>
    </button>
  );
}
