"use client";
import { useState } from "react";
import Image from "next/image";

// Componentes
import Navbar from "../components/Navbar";
import ExperienciaLaboral from "../components/ExperienciaLaboral";
import Proyectos from "../components/Proyectos";
import Testimonios from "../components/Testimonios";
import Contacto from "../components/Contacto";
import Galeria from "../components/Galeria"; 

export default function Page() {
  const [current, setCurrent] = useState(0);
  const images = ["/E1.jpg", "/E2.jpg", "/E3.jpg", "/E4.jpg", "/E5.jpg"];

  return (
    <main className="min-h-screen bg-[#234C74] text-white scroll-smooth pt-24 md:pt-28">
      {/* Header fijo */}
      <Navbar />

      {/* INICIO */}
     <section id="inicio" className="flex flex-col items-center justify-center py-20 text-center px-4">
        {/* Espacio para imagen de perfil */}
        <div className="mb-8">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-orange-400 shadow-2xl">
            <img
              src="/P1.jpg"
              alt="Edison Montero Garcia"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Título con nombre */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-300">
          Edison Montero García
        </h1>
        
        {/* Frase profesional */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-2">
          Profesional comprometido con el liderazgo y la innovación
        </p>
        
        <p className="text-lg text-gray-300 max-w-2xl">
          Apasionado por la tecnología, el emprendimiento y el desarrollo continuo
        </p>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobremi" className="py-16 bg-[#2A517E] px-4 md:px-20 scroll-mt-28">
        <h2 className="text-2xl font-semibold text-orange-300 mb-4">Sobre mí</h2>
        <p className="bg-purple-200 text-black p-4 rounded-lg shadow-md max-w-2xl">
          Poseo habilidad para emprender y liderar actividades, me gusta ser puntual, disfruto manejar motocicleta,
          ver los atardeceres y hacer ejercicio. En mis tiempos libres me agrada leer.
        </p>
      </section>

      {/* ESTUDIOS */}
      <section id="estudios" className="py-16 px-4 md:px-20 bg-[#2A517E] scroll-mt-28">
        <h2 className="text-2xl font-semibold text-orange-300 mb-4">Mis estudios</h2>
        <p className="bg-purple-200 text-black p-4 rounded-lg shadow-md max-w-2xl">
          Soy bachiller del Colegio Comfamiliar, tengo un diplomado de Contabilidad en la Universidad Mariana y
          he completado 2 cursos de programación en Platzi.
        </p>
      </section>

      {/* EXPERIENCIA LABORAL */}
      <ExperienciaLaboral />

      {/* PROYECTOS */}
      <Proyectos />

      {/* GALERÍA (ahora como componente) */}
      <Galeria />

      {/* TESTIMONIOS */}
      <Testimonios />

      {/* CONTACTO */}
      <Contacto />

      {/* Footer */}
      <footer className="text-center py-6 bg-[#1E3A5F] text-gray-300 text-sm">
        © {new Date().getFullYear()} Edison Montero. Todos los derechos reservados.
      </footer>
    </main>
  );
}
