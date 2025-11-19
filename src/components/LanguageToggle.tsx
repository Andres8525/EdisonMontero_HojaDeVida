"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const { theme } = useTheme();

  const trackBg = theme === "light"
    ? "bg-blue-100/60 border-blue-200/50"
    : "bg-gray-800/60 border-gray-700/50";

  const thumbBg = theme === "light"
    ? "bg-gradient-to-br from-blue-500 to-blue-600"
    : "bg-gradient-to-br from-orange-500 to-orange-600";

  return (
    <button
      onClick={toggleLanguage}
      className={`relative ${trackBg} border backdrop-blur-md rounded-full p-0 cursor-pointer transition-all overflow-hidden hover:scale-105 active:scale-95 w-[60px] h-[32px]`}
      aria-label={`Cambiar a ${language === "es" ? "inglés" : "español"}`}
      suppressHydrationWarning
    >
      <div className="relative w-full h-full flex items-center px-1" suppressHydrationWarning>
        <div 
          className={`absolute w-6 h-6 ${thumbBg} rounded-full flex items-center justify-center transition-transform duration-300 shadow-md ${
            language === "en" ? "translate-x-7" : "translate-x-0"
          }`}
          suppressHydrationWarning
        >
          <span className="text-xs font-bold text-white" suppressHydrationWarning>
            {language === "es" ? "ES" : "EN"}
          </span>
        </div>
      </div>
    </button>
  );
}