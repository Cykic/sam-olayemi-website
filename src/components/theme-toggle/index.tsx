"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils";

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs in <head> before first paint: applies the saved theme, or the system
 * one, so there's no flash of the wrong theme. With no saved choice it keeps
 * following the system setting.
 */
export const THEME_SCRIPT = `(function(){try{var d=document.documentElement,k="${THEME_STORAGE_KEY}",m=matchMedia("(prefers-color-scheme: dark)"),s=function(){var t=null;try{t=localStorage.getItem(k)}catch(e){}d.dataset.theme=t==="dark"||t==="light"?t:m.matches?"dark":"light"};s();m.addEventListener("change",s)}catch(e){}})()`;

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
};

const isDarkNow = () => document.documentElement.dataset.theme === "dark";

export const ThemeToggle = ({ className }: { className?: string }) => {
  const isDark = useSyncExternalStore(subscribe, isDarkNow, () => false);

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Private mode: the choice lasts for this page view only
    }
  };

  return (
    <IconButton
      onClick={toggle}
      aria-label="Dark theme"
      aria-pressed={isDark}
      variant="outline"
      size="sm"
      className={cn("relative overflow-hidden", className)}
    >
      <Sun size={17} aria-hidden="true" className="absolute transition-transform duration-500 ease-(--ease-out) dark:-translate-y-8" />
      <Moon size={17} aria-hidden="true" className="absolute translate-y-8 transition-transform duration-500 ease-(--ease-out) dark:translate-y-0" />
    </IconButton>
  );
};
