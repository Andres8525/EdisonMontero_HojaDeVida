"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

type Testimonio = {
  nombre: string;
  cargoEs: string;
  cargoEn: string;
  textoEs: string;
  textoEn: string;
  imagen: string;
};

export default function Testimonios() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const testimonios: Testimonio[] = [
    {
      nombre: "Diego Mallama",
      cargoEs: "Ing. Software",
      cargoEn: "Software Engineer",
      textoEs:
        "Edison demostró excelentes habilidades de liderazgo y compromiso. Su capacidad para resolver problemas y su dedicación fueron ejemplares durante el tiempo que trabajó con nosotros.",
      textoEn:
        "Edison demonstrated excellent leadership and commitment. His problem-solving skills and dedication were exemplary during the time he worked with us.",
      imagen: "/R4.jpg",
    },
    {
      nombre: "Yury Garcia",
      cargoEs: "Psicóloga Alcaldía de Pasto",
      cargoEn: "Psychologist – City Hall of Pasto",
      textoEs:
        "Es un profesional comprometido, con gran capacidad de aprendizaje y trabajo en equipo. Siempre está dispuesto a asumir nuevos retos y liderar actividades importantes.",
      textoEn:
        "He is a committed professional with great learning capacity and teamwork skills. He is always willing to take on new challenges and lead important activities.",
      imagen: "/R1.jpg",
    },
    {
      nombre: "Dayan Romo",
      cargoEs: "Coordinador Técnico - Unitik",
      cargoEn: "Technical Coordinator - Unitik",
      textoEs:
        "Trabajar con Edison fue una experiencia muy positiva. Destaca por su responsabilidad, puntualidad y orientación al cliente, aportando siempre soluciones prácticas y efectivas.",
      textoEn:
        "Working with Edison was a very positive experience. He stands out for his responsibility, punctuality, and customer focus, always providing practical and effective solutions.",
      imagen: "/R3.jpg",
    },
  ];

  const containerBg =
    theme === "light"
      ? "bg-gradient-to-br from-blue-100 to-blue-200"
      : "bg-gradient-to-br from-[#1E293B] to-[#334155]";

  const cardBg =
    theme === "light"
      ? "bg-white/80 backdrop-blur-xl border-blue-300/40"
      : "bg-gray-800/40 backdrop-blur-xl border-blue-500/20";

  const shadowStyle =
    theme === "light"
      ? "shadow-[0_8px_30px_rgba(59,130,246,0.15)]"
      : "shadow-[0_8px_30px_rgba(0,0,0,0.4)]";

  const accentColor = theme === "light" ? "text-blue-600" : "text-orange-400";
  const textPrimary = theme === "light" ? "text-gray-900" : "text-gray-100";
  const textSecondary =
    theme === "light" ? "text-gray-600" : "text-gray-300";

  const avatarRing =
    theme === "light" ? "ring-blue-400 ring-offset-blue-50" : "ring-orange-400 ring-offset-slate-900";

  return (
    <section
      className={`py-16 px-4 md:px-20 ${containerBg} rounded-2xl ${shadowStyle} transition-all duration-500`}
    >
      <h2
        className={`text-3xl md:text-4xl font-bold ${accentColor} mb-4 text-center`}
      >
        {language === "es" ? "Testimonios" : "Testimonials"}
      </h2>

      <p
        className={`${textPrimary} text-sm md:text-base mb-10 text-center max-w-2xl mx-auto`}
      >
        {language === "es"
          ? "Algunas personas con las que he trabajado y colaborado comparten su experiencia sobre mi desempeño profesional."
          : "Some of the people I have worked and collaborated with share their experience about my professional performance."}
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {testimonios.map((testimonio, index) => {
          const texto =
            language === "es"
              ? testimonio.textoEs
              : testimonio.textoEn;
          const cargo =
            language === "es"
              ? testimonio.cargoEs
              : testimonio.cargoEn;

          return (
            <div
              key={index}
              className={`${cardBg} border rounded-2xl p-6 flex flex-col gap-4 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(59,130,246,0.25)]`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-offset-2 ${avatarRing} shadow-lg`}
                >
                  <Image
                    src={testimonio.imagen}
                    alt={testimonio.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className={`font-semibold ${accentColor}`}>
                    {testimonio.nombre}
                  </p>
                  <p className={`text-xs md:text-sm ${textSecondary}`}>
                    {cargo}
                  </p>
                </div>
              </div>

              <p
                className={`${textSecondary} italic leading-relaxed mt-2`}
              >
                &ldquo;{texto}&rdquo;
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
