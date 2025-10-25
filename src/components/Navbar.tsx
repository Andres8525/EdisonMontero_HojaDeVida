"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobremi", label: "Sobre Mí" },
    { href: "#estudios", label: "Mis Estudios" },
    { href: "#experiencia", label: "Mi Experiencia Laboral" },
    { href: "#proyectos", label: "Mis Proyectos" },
    { href: "#galeria", label: "Galería" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Mi Contacto" },
  ];

  // Estilos comunes para el chip con animación de filling
  const chipBase =
    "group relative inline-flex items-center justify-center " +
    "rounded-full border border-white/30 text-white/90 " +
    "overflow-hidden transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400/60";

  // Fondo animado (capa inferior)
  const chipFill =
    "absolute inset-0 rounded-full bg-red-500 " +
    "origin-left scale-x-0 transition-transform duration-300 ease-out " +
    "group-hover:scale-x-100 group-focus:scale-x-100";

  // Texto (capa superior)
  const chipText = "relative z-10 transition-colors group-hover:text-white group-focus:text-white";

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50 w-full
        h-20 md:h-24
        /* ¡IMPORTANTE! Sin overflow-hidden para no cortar el dropdown */
        rounded-b-[2rem]
        border border-white/25 ring-1 ring-white/20
        shadow-2xl
      "
    >
      {/* Fondo: SOLO imagen (public/header.png) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/asus.jpg"
          alt="Header background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Contenido */}
      <nav className="relative z-10 flex items-center justify-between h-full px-4 md:px-12">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide text-red-400 drop-shadow-md">
          Edison Montero
        </h1>

        {/* Botón hamburguesa para móvil */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Abrir menú"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menú desktop */}
        <ul className="hidden md:flex gap-3 lg:gap-4 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={`${chipBase} px-4 py-2`}>
                <span className={chipFill} aria-hidden />
                <span className={chipText}>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Menú móvil (desplegado BAJO el header, visible) */}
        {isMenuOpen && (
          <ul
            className="
              absolute left-0 right-0 top-full z-50
              md:hidden shadow-xl rounded-b-2xl
              border-x border-b border-white/20
              bg-[#1E3A5F]/95 backdrop-blur-0
              px-4 py-4 space-y-2
            "
          >
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`${chipBase} w-full px-5 py-3`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={chipFill} aria-hidden />
                  <span className={chipText}>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Acento inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-1 w-full bg-gradient-to-r from-orange-400/80 via-orange-300/70 to-orange-400/80 rounded-b-[2rem]" />
    </header>
  );
}
