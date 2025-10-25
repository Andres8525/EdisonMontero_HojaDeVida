"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * Carrusel monolítico:
 * - Una tarjeta visible centrada
 * - Autoplay cada 3s
 * - Slide suave con GSAP (translateX + fade)
 * - Pausa al hover / al enfocar (accesible)
 * - Indicadores clicables
 */
export default function Galeria() {
  // Asegúrate de que existan estas imágenes en /public
  const images = useMemo(
    () => ["/E1.jpg", "/E2.jpg", "/E3.jpg", "/E4.jpg", "/E5.jpg"],
    []
  );

  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const currentRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hoveringRef = useRef(false);

  const duration = 0.6; // segundos
  const intervalMs = 3000; // autoplay

  const goTo = (next: number, direction: 1 | -1 = 1) => {
    if (!containerRef.current) return;

    const fromEl = currentRef.current;
    const toEl = nextRef.current;

    // Evitar animaciones si reduce motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (fromEl && toEl) {
      // Posicionar la próxima tarjeta fuera de pantalla en la dirección elegida
      gsap.set(toEl, {
        xPercent: direction * 105,
        opacity: 0.0001,
        zIndex: 2,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
      });

      // Asegurar la actual por encima
      gsap.set(fromEl, { zIndex: 3, position: "absolute", top: 0, left: 0, right: 0 });

      if (prefersReduced) {
        // Salto sin animación
        gsap.set(fromEl, { xPercent: -direction * 105, opacity: 0 });
        gsap.set(toEl, { xPercent: 0, opacity: 1 });
      } else {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        tl.to(fromEl, { xPercent: -direction * 105, opacity: 0, duration })
          .to(toEl, { xPercent: 0, opacity: 1, duration }, 0);
      }
    }

    setIndex(next);
  };

  const next = () => goTo((index + 1) % images.length, 1);
  const prev = () => goTo((index - 1 + images.length) % images.length, -1);

  // Autoplay
  useEffect(() => {
    const start = () => {
      if (autoplayRef.current) return;
      autoplayRef.current = setInterval(() => {
        if (!hoveringRef.current) next();
      }, intervalMs);
    };
    const stop = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, images.length]);

  // Pausar en hover/focus para accesibilidad
  const onMouseEnter = () => {
    hoveringRef.current = true;
  };
  const onMouseLeave = () => {
    hoveringRef.current = false;
  };

  return (
    <section
      id="galeria"
      className="py-16 flex flex-col items-center bg-[#20496E] px-4 scroll-mt-28"
    >
      <h2 className="text-2xl font-semibold text-orange-300 mb-6">
        Galería
      </h2>

      <div
        className="relative w-full max-w-3xl"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Viewport */}
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-2xl shadow-xl h-[320px] md:h-[440px] bg-black/20"
        >
          {/* Tarjeta actual */}
          <div ref={currentRef} className="absolute inset-0">
            <Card src={images[index]} alt={`Imagen ${index + 1}`} />
          </div>

          {/* Tarjeta siguiente (para animación) */}
          <div ref={nextRef} className="absolute inset-0 pointer-events-none">
            <Card
              src={images[(index + 1) % images.length]}
              alt={`Imagen ${(index + 1) % images.length || images.length}`}
            />
          </div>
        </div>

        {/* Controles */}
        <button
          onClick={prev}
          aria-label="Imagen anterior"
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-black rounded-full p-2"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Imagen siguiente"
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-black rounded-full p-2"
        >
          ›
        </button>

        {/* Indicadores */}
        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a la imagen ${i + 1}`}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index
                  ? "bg-orange-400 scale-110"
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={false}
        sizes="(max-width: 768px) 100vw, 768px"
      />
      {/* Franja inferior de estilo “card” */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}
