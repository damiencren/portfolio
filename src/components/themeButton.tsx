'use client'
import { useTheme } from "next-themes"
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export const ThemeButton = () => {
    const { theme, setTheme} = useTheme();

    return (
        <Button className="fixed top-0 right-0 m-8 p-5 z-10" variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    )
}