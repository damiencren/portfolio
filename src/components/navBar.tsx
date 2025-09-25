"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, FolderKanban, GraduationCap, Calendar } from "lucide-react";

type Section = {
  id: string;
  label: string;
  icon: string;
};

const iconComponents = {
  Home,
  User,
  Briefcase,
  FolderKanban,
  GraduationCap,
  Calendar,
};

export function NavBar() {
  const sections: Section[] = useMemo(
    () => [
      { id: "about", label: "About", icon: "User" },
      { id: "work", label: "Experience", icon: "Briefcase" },
      { id: "projects", label: "Projects", icon: "FolderKanban" },
      { id: "education", label: "Education", icon: "GraduationCap" },
      { id: "events", label: "Events", icon: "Calendar" },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateActiveByTop = () => {
      const candidates = sections
        .map((s) => {
          const el = document.getElementById(s.id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { id: s.id, top: rect.top, bottom: rect.bottom } as const;
        })
        .filter((r): r is { id: string; top: number; bottom: number } => !!r)
        // Only consider visible (overlapping viewport)
        .filter((r) => r.bottom > 0 && r.top < window.innerHeight);

      if (candidates.length === 0) return;

      // Prefer the smallest non-negative top (closest below/at top)
      const positive = candidates.filter((c) => c.top >= 0);
      let chosen = null as null | { id: string; top: number; bottom: number };
      if (positive.length > 0) {
        positive.sort((a, b) => a.top - b.top);
        chosen = positive[0];
      } else {
        // If all tops are negative, pick the one closest to the top (max top)
        candidates.sort((a, b) => b.top - a.top);
        chosen = candidates[0];
      }

      if (chosen && chosen.id !== activeId) {
        setActiveId(chosen.id);
      }
    };

    window.addEventListener("scroll", updateActiveByTop, { passive: true });
    // Initialize on mount in case the page loads mid-way
    updateActiveByTop();

    return () => {
      window.removeEventListener("scroll", updateActiveByTop);
    };
  }, [sections, activeId]);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    // Scroll smoothly to section
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      ref={containerRef}
      className={cn(
        "fixed left-20 top-1/2 -translate-y-1/2 z-40",
        "flex  left-20 flex-col gap-3 rounded-full",
        "bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/40",
        "hidden xl:flex"
      )}
      aria-label="Sections"
    >
      {sections.map((section) => {
        const isActive = section.id === activeId;
        const Icon = (iconComponents as Record<string, React.ElementType>)[section.icon] || Home;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={handleClick(section.id)}
            className={cn(
              "group relative",
              "flex items-center gap-2",
              "rounded-full px-4 py-2",
              "transition",
              isActive
                ? "bg-foreground/10 text-foreground"
                : "text-foreground/70 hover:text-foreground"
            )}
            style={{
              transform: isActive ? "translateX(6px)" : "translateX(0px)",
            }}
          >
            <span
              className={cn(
                "absolute inset-0 rounded-full -z-10",
                "opacity-0 scale-95 transition-all duration-200",
                "group-hover:opacity-100 group-hover:scale-100",
                "bg-foreground/5"
              )}
            />
            <Icon className="h-4 w-4" />
            <span className={"text-md"}>{section.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

export default NavBar;


