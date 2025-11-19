"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ExperienciaLaboral from "@/components/ExperienciaLaboral";
import Proyectos from "@/components/Proyectos";
import Testimonios from "@/components/Testimonios";
import Contacto from "@/components/Contacto";
import Galeria from "@/components/Galeria";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function Page() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [focusedSection, setFocusedSection] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const bgGradient =
    theme === "light"
      ? "bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200"
      : "bg-gradient-to-b from-[#0B1220] via-[#0F172A] to-[#1E293B]";

  const cardBg =
    theme === "light"
      ? "bg-white/70 backdrop-blur-xl border-blue-300/40"
      : "bg-gray-800/40 backdrop-blur-xl border-blue-500/20";

  const shadowStyle =
    theme === "light"
      ? "shadow-[0_8px_30px_rgba(59,130,246,0.15)]"
      : "shadow-[0_8px_30px_rgba(0,0,0,0.40)]";

  const hoverShadow =
    theme === "light"
      ? "hover:shadow-[0_12px_40px_rgba(59,130,246,0.25)]"
      : "hover:shadow-[0_12px_40px_rgba(59,130,246,0.20)]";

  const borderColor =
    theme === "light" ? "border-blue-200/50" : "border-blue-500/20";

  const accentColor =
    theme === "light" ? "text-blue-600" : "text-orange-400";

  const textNormal =
    theme === "light" ? "text-gray-700" : "text-gray-200";

  useEffect(() => {
    setMounted(true);
  }, []);

  const getOpacity = (sectionId: string) => {
    if (!focusedSection) return "opacity-100";
    return focusedSection === sectionId ? "opacity-100 scale-[1.02]" : "opacity-40 scale-[0.98]";
  };

  const getFocusGlow = (sectionId: string) => {
    if (focusedSection === sectionId) {
      return theme === "light"
        ? "ring-4 ring-blue-400/60 shadow-[0_0_40px_rgba(59,130,246,0.4)]"
        : "ring-4 ring-orange-400/60 shadow-[0_0_40px_rgba(251,146,60,0.4)]";
    }
    return "";
  };

  // Evitar hydration mismatch
  if (!mounted) {
    return (
      <>
        <Navbar onSectionClick={setFocusedSection} />
        <main className={`min-h-screen ${bgGradient} text-white pt-24 md:pt-28`}>
          <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-16">
            <section id="inicio" className="flex flex-col items-center text-center gap-6">
              <div className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 ${theme === "light" ? "border-blue-400/80" : "border-orange-400/80"}`}>
                <Image src="/P1.jpg" alt="Edison Montero García" fill className="object-cover" priority />
              </div>
              <h1 className={`text-4xl md:text-5xl font-extrabold tracking-tight ${accentColor}`}>
                Edison Montero García
              </h1>
            </section>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar onSectionClick={setFocusedSection} />

      <main
        className={`min-h-screen ${bgGradient} text-white pt-24 md:pt-28 transition-all duration-500`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-16">
          {/* INICIO */}
          <section
            id="inicio"
            className="flex flex-col items-center text-center gap-6"
          >
            <div
              className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 ${
                theme === "light"
                  ? "border-blue-400/80"
                  : "border-orange-400/80"
              } ${shadowStyle} hover:scale-105 transition-transform duration-300`}
            >
              <Image
                src="/P11.jpg"
                alt="Edison Montero García"
                fill
                className="object-cover"
                priority
              />
            </div>

            <h1
              className={`text-4xl md:text-5xl font-extrabold tracking-tight ${accentColor}`}
            >
              Edison Montero García
            </h1>

            <p className={`text-lg md:text-xl max-w-3xl ${textNormal}`}>
              {language === "es"
                ? "Profesional comprometido con el liderazgo y la innovación."
                : "Professional committed to leadership and innovation."}
            </p>
          </section>

          {/* SOBRE MÍ Y ESTUDIOS - 2 COLUMNAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SOBRE MÍ */}
            <section
              id="sobremi"
              className={`scroll-mt-28 ${cardBg} ${shadowStyle} border ${borderColor} ${hoverShadow} ${getFocusGlow("sobremi")} ${getOpacity("sobremi")} p-6 md:p-8 rounded-2xl transform transition-all duration-500`}
            >
              <h2
                className={`text-2xl md:text-3xl font-bold text-center mb-4 ${accentColor}`}
              >
                {t("about.title")}
              </h2>

              <p
                className={`text-sm md:text-base leading-relaxed text-justify ${textNormal}`}
              >
                {t("about.text")}
              </p>
            </section>

            {/* ESTUDIOS */}
            <section
              id="estudios"
              className={`scroll-mt-28 ${cardBg} ${shadowStyle} border ${borderColor} ${hoverShadow} ${getFocusGlow("estudios")} ${getOpacity("estudios")} p-6 md:p-8 rounded-2xl transform transition-all duration-500`}
            >
              <h2
                className={`text-2xl md:text-3xl font-bold text-center mb-4 ${accentColor}`}
              >
                {t("studies.title")}
              </h2>

              <p
                className={`text-sm md:text-base leading-relaxed text-justify ${textNormal}`}
              >
                {t("studies.text")}
              </p>
            </section>
          </div>

          {/* EXPERIENCIA */}
          <section id="experiencia" className="scroll-mt-28">
            <ExperienciaLaboral />
          </section>

          {/* PROYECTOS */}
          <section id="proyectos" className="scroll-mt-28">
            <Proyectos />
          </section>

          {/* GALERIA */}
          <section id="galeria" className="scroll-mt-28">
            <Galeria />
          </section>

          {/* TESTIMONIOS */}
          <section id="testimonios" className="scroll-mt-28">
            <Testimonios />
          </section>

          {/* CONTACTO */}
          <section id="contacto" className="scroll-mt-28">
            <Contacto />
          </section>

          {/* FOOTER */}
          <footer
            className={`text-center py-6 text-xs md:text-sm ${
              theme === "light" ? "text-gray-700" : "text-gray-400"
            }`}
          >
            © {new Date().getFullYear()} Edison Montero. {t("footer.rights")}
          </footer>
        </div>
      </main>
    </>
  );
}