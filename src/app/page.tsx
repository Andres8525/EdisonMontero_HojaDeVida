"use client";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [current, setCurrent] = useState(0);

  // Aquí colocarás las 5 imágenes que quieras usar
  const images = [
    "/E1.jpg",
    "/E2.jpg",
    "/E3.jpg",
    "/E4.jpg",
    "/img5.jpg",
  ];

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <main className="min-h-screen bg-[#234C74] text-white scroll-smooth">
      {/* 🔹 NAVBAR */}
      <nav className="flex flex-wrap items-center justify-between p-4 bg-[#1E3A5F] shadow-md sticky top-0 z-50">
        <h1 className="text-lg font-bold tracking-wide">Edison Montero</h1>
        <ul className="flex flex-wrap gap-4 text-sm">
          <li><a href="#inicio" className="hover:text-orange-400">Inicio</a></li>
          <li><a href="#sobremi" className="hover:text-orange-400">Sobre mí</a></li>
          <li><a href="#galeria" className="hover:text-orange-400">Galería</a></li>
          <li><a href="#estudios" className="hover:text-orange-400">Estudios</a></li>
        </ul>
      </nav>

      {/* 🔹 SECCIÓN INICIO */}
      <section id="inicio" className="flex flex-col items-center justify-center py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-orange-300">Bienvenido a mi página personal</h2>
        <p className="max-w-2xl text-gray-200">
          Explora mi información personal, mis pasatiempos, mis estudios y una galería de mis fotos favoritas.
        </p>
      </section>

      {/* 🔹 SECCIÓN SOBRE MÍ */}
      <section id="sobremi" className="py-16 bg-[#2A517E] px-4 md:px-20">
        <h2 className="text-2xl font-semibold text-orange-300 mb-4">Sobre mí</h2>
        <p className="bg-purple-200 text-black p-4 rounded-lg shadow-md max-w-2xl">
          Poseo habilidad para emprender y liderar actividades, me gusta ser puntual, disfruto manejar motocicleta,
          ver los atardeceres y hacer ejercicio. En mis tiempos libres me agrada leer.
        </p>
      </section>

      {/* 🔹 SECCIÓN GALERÍA (CARRUSEL) */}
      <section id="galeria" className="py-16 flex flex-col items-center bg-[#20496E] px-4">
        <h2 className="text-2xl font-semibold text-orange-300 mb-6">Galería</h2>

        <div className="relative w-full max-w-xl">
          {/* Imagen actual */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={images[current]}
              alt={`Imagen ${current + 1}`}
              width={800}
              height={500}
              className="w-full h-[300px] md:h-[400px] object-cover transition-all duration-500"
            />
          </div>

          {/* Botones del carrusel */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-black rounded-full p-2"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-black rounded-full p-2"
          >
            ›
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-3 w-3 rounded-full cursor-pointer ${
                  i === current ? "bg-orange-400" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 SECCIÓN ESTUDIOS */}
      <section id="estudios" className="py-16 px-4 md:px-20 bg-[#2A517E]">
        <h2 className="text-2xl font-semibold text-orange-300 mb-4">Mis estudios</h2>
        <p className="bg-purple-200 text-black p-4 rounded-lg shadow-md max-w-2xl">
          Soy bachiller del Colegio Comfamiliar, tengo un diplomado de Contabilidad en la Universidad Mariana y
          he completado 2 cursos de programación en Platzi.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-[#1E3A5F] text-gray-300 text-sm">
        © {new Date().getFullYear()} Edison Montero. Todos los derechos reservados.
      </footer>
    </main>
  );
}
