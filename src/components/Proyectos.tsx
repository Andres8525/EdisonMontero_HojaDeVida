"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function Proyectos() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const proyectos = [
    {
      titulo: language === 'es' ? "Proyecto Web Personal" : "Personal Web Project",
      descripcion: language === 'es' 
        ? "Página personal desarrollada con Next.js y Tailwind CSS"
        : "Personal page developed with Next.js and Tailwind CSS",
      tecnologias: ["Next.js", "React", "Tailwind CSS"],
      estado: language === 'es' ? "Completado" : "Completed"
    },
    {
      titulo: language === 'es' ? "Sistema de Gestión" : "Management System",
      descripcion: language === 'es'
        ? "Aplicación para gestión de inventario y procesos"
        : "Application for inventory and process management",
      tecnologias: ["JavaScript", "Node.js", "CSS"],
      estado: language === 'es' ? "En desarrollo" : "In development"
    },
    {
      titulo: language === 'es' ? "Proyecto de Automatización" : "Automation Project",
      descripcion: language === 'es'
        ? "Scripts y herramientas para automatizar tareas repetitivas"
        : "Scripts and tools to automate repetitive tasks",
      tecnologias: ["Python", "JavaScript"],
      estado: language === 'es' ? "Completado" : "Completed"
    }
  ];

  const containerBg = theme === 'light'
    ? 'bg-gradient-to-br from-blue-100 to-blue-200'
    : 'bg-gradient-to-br from-[#1E293B] to-[#334155]';

  const cardBg = theme === 'light'
    ? 'bg-white/80 backdrop-blur-xl'
    : 'bg-gray-800/40 backdrop-blur-xl';

  const shadowStyle = theme === 'light'
    ? 'shadow-[0_8px_30px_rgb(59,130,246,0.15)]'
    : 'shadow-[0_8px_30px_rgb(0,0,0,0.4)]';

  const accentColor = theme === 'light' ? 'text-blue-600' : 'text-orange-400';
  const textPrimary = theme === 'light' ? 'text-gray-900' : 'text-gray-100';

  return (
    <section className={`py-16 px-4 md:px-20 ${containerBg} rounded-2xl ${shadowStyle} transition-all duration-500`}>
      <h2 className={`text-3xl md:text-4xl font-bold ${accentColor} mb-8 text-center`}>
        {language === 'es' ? 'Mis Proyectos' : 'My Projects'}
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {proyectos.map((proyecto, idx) => (
          <div key={idx} className={`${cardBg} ${textPrimary} p-6 rounded-xl ${shadowStyle} hover:shadow-[0_12px_40px_rgb(59,130,246,0.25)] hover:scale-105 transition-all duration-300`}>
            <div className="mb-3">
              <h3 className="text-xl font-bold mb-2">{proyecto.titulo}</h3>
              <span className={`text-xs px-3 py-1 rounded-full ${
                proyecto.estado.includes("Completado") || proyecto.estado.includes("Completed")
                  ? theme === 'light' ? "bg-green-500 text-white" : "bg-green-600 text-white"
                  : theme === 'light' ? "bg-yellow-400 text-black" : "bg-yellow-500 text-black"
              }`}>
                {proyecto.estado}
              </span>
            </div>
            
            <p className={`mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{proyecto.descripcion}</p>
            
            <div className="flex flex-wrap gap-2">
              {proyecto.tecnologias.map((tech, i) => (
                <span key={i} className={`${theme === 'light' ? 'bg-blue-500' : 'bg-orange-400'} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}