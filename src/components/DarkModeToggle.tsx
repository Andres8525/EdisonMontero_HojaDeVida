"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  const trackBg = theme === "light"
    ? "bg-blue-100/60 border-blue-200/50"
    : "bg-gray-800/60 border-gray-700/50";

  const thumbBg = theme === "light"
    ? "bg-gradient-to-br from-blue-500 to-blue-600"
    : "bg-gradient-to-br from-orange-500 to-orange-600";

  return (
    <button
      onClick={toggleTheme}
      className={`relative ${trackBg} border backdrop-blur-md rounded-full p-0 cursor-pointer transition-all overflow-hidden hover:scale-105 active:scale-95 w-[60px] h-[32px]`}
      aria-label={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
      suppressHydrationWarning
    >
      <div className="relative w-full h-full flex items-center px-1" suppressHydrationWarning>
        <div 
          className={`absolute w-6 h-6 ${thumbBg} rounded-full flex items-center justify-center transition-transform duration-300 shadow-md ${
            theme === "light" ? "translate-x-7" : "translate-x-0"
          }`}
          suppressHydrationWarning
        >
          {theme === "light" ? (
            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="5" strokeWidth="2"/>
              <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2"/>
              <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2"/>
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </div>
      </div>
    </button>
  );
}