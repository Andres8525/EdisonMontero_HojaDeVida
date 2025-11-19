"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // NAVBAR
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.studies": "Estudios",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.gallery": "Galería",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",

    // ABOUT
    "about.title": "Sobre mí",
    "about.text":
      "Poseo habilidades para emprender, liderar actividades y trabajar en equipo. Me gustan el deporte, compartir con mi familia, escuchar música y leer. En la sección de galería podrás encontrar algunas imágenes de mis pasatiempos.",

    // STUDIES
    "studies.title": "Estudios",
    "studies.text":
      "Soy bachiller del Colegio Comfamiliar. He complementado mi formación con cursos de programación y tecnología en plataformas como Platzi, además de participar en diferentes seminarios y espacios de actualización profesional.",

    // FOOTER
    "footer.rights": "Todos los derechos reservados.",
  },

  en: {
    // NAVBAR
    "nav.home": "Home",
    "nav.about": "About",
    "nav.studies": "Studies",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.gallery": "Gallery",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",

    // ABOUT
    "about.title": "About Me",
    "about.text":
      "I have the ability to start initiatives, lead activities, and work as part of a team. I enjoy sports, spending time with my family, listening to music, and reading. In the gallery section you can find some images of my hobbies.",

    // STUDIES
    "studies.title": "Studies",
    "studies.text":
      "I am a high school graduate from Colegio Comfamiliar. I have complemented my education with programming and technology courses on platforms such as Platzi, as well as participating in different seminars and professional development events.",

    // FOOTER
    "footer.rights": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(
    (typeof window !== "undefined" &&
      (localStorage.getItem("language") as Language)) ||
      "es"
  );

  const toggleLanguage = () => {
    const newLang: Language = language === "es" ? "en" : "es";
    setLanguage(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", newLang);
    }
  };

  const t = (key: string): string => {
    const langTable = translations[language];
    return langTable[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
