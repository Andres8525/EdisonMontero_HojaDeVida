"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import DarkModeToggle from "./DarkModeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

interface NavbarProps {
  onSectionClick?: (sectionId: string) => void;
}

export default function Navbar({ onSectionClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { t } = useLanguage();
  const { theme } = useTheme();
  const navRef = useRef<HTMLElement>(null);

  const menuItems = [
    { href: "#inicio", label: t("nav.home"), id: "inicio" },
    { href: "#sobremi", label: t("nav.about"), id: "sobremi" },
    { href: "#estudios", label: t("nav.studies"), id: "estudios" },
    { href: "#experiencia", label: t("nav.experience"), id: "experiencia" },
    { href: "#proyectos", label: t("nav.projects"), id: "proyectos" },
    { href: "#galeria", label: t("nav.gallery"), id: "galeria" },
    { href: "#testimonios", label: t("nav.testimonials"), id: "testimonios" },
    { href: "#contacto", label: t("nav.contact"), id: "contacto" },
  ];

  const navBg = theme === "light"
    ? "bg-white/40"
    : "bg-gray-900/40";

  const borderColor = theme === "light"
    ? "border-blue-300/40"
    : "border-blue-400/30";

  const shadowStyle = theme === "light"
    ? "shadow-[0_8px_32px_rgba(59,130,246,0.15)]"
    : "shadow-[0_8px_32px_rgba(0,0,0,0.5)]";

  const titleColor = theme === "light"
    ? "text-blue-600"
    : "text-orange-400";

  const linkBg = theme === "light"
    ? "bg-blue-100/60 border border-blue-200/50"
    : "bg-gray-800/60 border border-gray-700/50";

  const linkText = theme === "light"
    ? "text-gray-800"
    : "text-gray-200";

  const linkHover = theme === "light"
    ? "hover:shadow-[0_4px_20px_rgba(59,130,246,0.4),0_0_30px_rgba(59,130,246,0.2)] hover:scale-105"
    : "hover:shadow-[0_4px_20px_rgba(251,146,60,0.4),0_0_30px_rgba(251,146,60,0.2)] hover:scale-105";

  const accentLine = theme === "light"
    ? "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
    : "bg-gradient-to-r from-transparent via-orange-400 to-transparent";

  const mobileMenuBg = theme === "light"
    ? "bg-white/95 border-blue-300/50"
    : "bg-gray-900/95 border-gray-700/50";

  useEffect(() => {
    setMounted(true);
    
    if (navRef.current) {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (onSectionClick) {
      onSectionClick(sectionId);
      setTimeout(() => {
        onSectionClick("");
      }, 3000);
    }
  };

  if (!mounted) {
    return (
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div className="bg-white/40 backdrop-blur-xl rounded-full border border-blue-300/40 h-16" />
      </header>
    );
  }

  return (
    <header 
      ref={navRef} 
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-500"
    >
      <div className={`${navBg} backdrop-blur-xl rounded-full border ${borderColor} ${shadowStyle}`}>
        <nav className="relative z-10 flex items-center justify-between h-16 md:h-20 px-6 md:px-8">
          
          <h1 className={`text-lg md:text-xl font-bold tracking-wide ${titleColor} transition-colors duration-300`}>
            Edison Montero
          </h1>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${linkText} focus:outline-none transition-colors p-2`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ul className="flex gap-2 text-sm font-medium">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    onClick={() => handleLinkClick(item.id)}
                    className={`
                      relative px-4 py-2 rounded-full inline-block
                      ${linkBg} ${linkText} ${linkHover}
                      transition-all duration-200 ease-out
                      ${activeSection === item.id ? 'ring-2 ring-offset-2 ' + (theme === 'light' ? 'ring-blue-400' : 'ring-orange-400') : ''}
                    `}
                  >
                    <span className="relative z-10 font-medium">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-2 ml-2">
              <LanguageToggle />
              <DarkModeToggle />
            </div>
          </div>
        </nav>

        <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${accentLine} rounded-full`} />
      </div>

      {isMenuOpen && (
        <div className={`mt-4 ${mobileMenuBg} backdrop-blur-xl rounded-3xl border ${shadowStyle} p-4 space-y-2`}>
          {menuItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              onClick={() => {
                handleLinkClick(item.id);
                setIsMenuOpen(false);
              }}
              className={`block w-full px-5 py-3 rounded-2xl ${linkBg} ${linkText} transition-all hover:scale-[1.02]`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}