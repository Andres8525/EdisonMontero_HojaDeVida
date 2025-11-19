"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function ExperienciaLaboral() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const experiences = [
    {
      title: language === 'es' ? 'Procesador' : 'Processor',
      company: "JF ZAMBRANO SAS",
      duration: language === 'es' ? '2 años' : '2 years',
      description: language === 'es' 
        ? 'Procesamiento de datos y gestión administrativa'
        : 'Data processing and administrative management'
    },
    {
      title: "Unitik Internet Sin Límite",
      company: "",
      duration: language === 'es' ? '1 año' : '1 year',
      description: language === 'es'
        ? 'Soporte técnico y atención al cliente'
        : 'Technical support and customer service'
    }
  ];

  const containerBg = theme === 'light'
    ? 'bg-gradient-to-br from-blue-100 to-blue-200'
    : 'bg-gradient-to-br from-[#1E293B] to-[#334155]';

  const cardBg = theme === 'light'
    ? 'bg-white/80 backdrop-blur-xl border-blue-300/50'
    : 'bg-gray-800/40 backdrop-blur-xl border-blue-500/20';

  const shadowStyle = theme === 'light'
    ? 'shadow-[0_8px_30px_rgb(59,130,246,0.15)]'
    : 'shadow-[0_8px_30px_rgb(0,0,0,0.4)]';

  const textPrimary = theme === 'light' ? 'text-gray-900' : 'text-gray-100';
  const textSecondary = theme === 'light' ? 'text-gray-600' : 'text-gray-300';
  const accentColor = theme === 'light' ? 'text-blue-600' : 'text-orange-400';
  const dotColor = theme === 'light' ? 'bg-blue-500' : 'bg-orange-400';

  return (
    <section className={`py-16 px-4 md:px-20 ${containerBg} rounded-2xl ${shadowStyle} transition-all duration-500`}>
      <h2 className={`text-3xl md:text-4xl font-bold ${accentColor} mb-8 text-center`}>
        {language === 'es' ? 'Mi Experiencia Laboral' : 'My Work Experience'}
      </h2>
      
      <p className={`${textPrimary} mb-8 text-center max-w-2xl mx-auto`}>
        {language === 'es' 
          ? 'Tengo experiencia en 2 empresas: Unitik internet sin límite donde estuve trabajando durante un año, y 2 años como procesador en JF ZAMBRANO SAS'
          : 'I have experience in 2 companies: Unitik unlimited internet where I worked for one year, and 2 years as a processor at JF ZAMBRANO SAS'
        }
      </p>

      <div className="space-y-6 max-w-3xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`${cardBg} border rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 ${shadowStyle} hover:shadow-[0_12px_40px_rgb(59,130,246,0.25)]`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className={`w-4 h-4 rounded-full ${dotColor} ring-4 ${theme === 'light' ? 'ring-blue-200' : 'ring-orange-400/20'}`} />
              </div>

              <div className="flex-1">
                <h3 className={`font-bold text-xl ${accentColor} mb-1`}>
                  {exp.title}
                </h3>
                
                {exp.company && (
                  <p className={`${theme === 'light' ? 'text-blue-700' : 'text-orange-500'} font-semibold text-lg mb-2`}>
                    {exp.company}
                  </p>
                )}
                
                <p className={`text-sm ${textSecondary} mb-3 flex items-center gap-2`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {language === 'es' ? 'Duración:' : 'Duration:'} {exp.duration}
                </p>

                <p className={`${textPrimary} text-sm`}>
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 📄 Botón para abrir CV */}
      <div className="text-center mt-10">
        <a
          href="/Cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            inline-block px-6 py-3 rounded-xl font-semibold text-sm md:text-base transition-all
            shadow-md hover:shadow-lg
            ${
              theme === "light"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-orange-500 text-black hover:bg-orange-400"
            }
          `}
        >
          📄 {language === "es" ? "Ver Hoja de Vida" : "View Resume"}
        </a>
      </div>
    </section>
  );
}
