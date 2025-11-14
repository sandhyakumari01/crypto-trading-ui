"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";


export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      // variant="outline"
      // size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-muted-foreground hover:text-foreground" />
      ) : (
        <Sun className="h-5 w-5 text-muted-foreground hover:text-foreground" />
      )}
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
