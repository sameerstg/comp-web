"use client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleChange = () => {
    if (theme === "system") {
      setTheme(systemTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <motion.button
      className="text-2xl"
      type="button"
      title="Toggle theme"
      aria-label="Toggle theme"
      onClick={handleChange}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 360 }}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </motion.button>
  );
}
