"use client";
import { useState } from "react";

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

  return (
    <nav className="flex items-center justify-between p-4 bg-[#1E3A5F] shadow-md sticky top-0 z-50">
      <h1 className="text-lg font-bold tracking-wide">Edison Montero</h1>
      
      {/* Botón hamburguesa para móvil */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Menú desktop */}
      <ul className="hidden md:flex gap-4 text-sm">
        {menuItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="hover:text-orange-400 transition-colors">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#1E3A5F] md:hidden shadow-lg">
          {menuItems.map((item) => (
            <li key={item.href} className="border-b border-[#234C74]">
              <a
                href={item.href}
                className="block px-4 py-3 hover:bg-[#234C74] hover:text-orange-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}