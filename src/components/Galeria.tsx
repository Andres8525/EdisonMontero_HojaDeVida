"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

type Direction = 1 | -1;

export default function Galeria() {
  const { theme } = useTheme();
  const { language } = useLanguage();

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

  const duration = 0.6;
  const intervalMs = 3000;

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const goTo = (next: number, direction: Direction) => {
    if (next === index || !currentRef.current || !nextRef.current) return;

    const fromEl = currentRef.current;
    const toEl = nextRef.current;

    gsap.set(toEl, {
      xPercent: direction * 105,
      opacity: 0,
      zIndex: 2,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    });

    gsap.set(fromEl, {
      zIndex: 3,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    });

    if (prefersReducedMotion) {
      gsap.set(fromEl, { xPercent: -direction * 105, opacity: 0 });
      gsap.set(toEl, { xPercent: 0, opacity: 1 });
    } else {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.to(fromEl, { xPercent: -direction * 105, opacity: 0, duration })
        .to(toEl, { xPercent: 0, opacity: 1, duration }, 0);
    }

    setIndex(next);
  };

  const next = () => goTo((index + 1) % images.length, 1);
  const prev = () => goTo((index - 1 + images.length) % images.length, -1);

  useEffect(() => {
    if (prefersReducedMotion) return;

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
  }, [index, images.length, prefersReducedMotion]);

  const onMouseEnter = () => {
    hoveringRef.current = true;
  };

  const onMouseLeave = () => {
    hoveringRef.current = false;
  };

  const containerBg =
    theme === "light"
      ? "bg-gradient-to-br from-blue-100 to-blue-200"
      : "bg-gradient-to-br from-[#1E293B] to-[#334155]";

  const cardBg =
    theme === "light"
      ? "bg-white/80 backdrop-blur-xl"
      : "bg-gray-900/40 backdrop-blur-xl";

  const shadowStyle =
    theme === "light"
      ? "shadow-[0_8px_30px_rgba(59,130,246,0.15)]"
      : "shadow-[0_8px_30px_rgba(0,0,0,0.4)]";

  const accentColor = theme === "light" ? "text-blue-600" : "text-orange-400";

  const arrowBtn =
    theme === "light"
      ? "bg-white/70 hover:bg-white text-gray-800"
      : "bg-black/40 hover:bg-black/70 text-white";

  const dotInactive =
    theme === "light"
      ? "bg-gray-300 hover:bg-gray-400"
      : "bg-gray-500 hover:bg-gray-400";

  const dotActive = theme === "light" ? "bg-blue-500" : "bg-orange-400";

  return (
    <section
      id="galeria"
      className={`py-16 px-4 md:px-20 ${containerBg} rounded-2xl ${shadowStyle} scroll-mt-28 transition-all duration-500`}
    >
      <h2
        className={`text-3xl md:text-4xl font-bold ${accentColor} mb-8 text-center`}
      >
        {language === "es" ? "Galería" : "Gallery"}
      </h2>

      <div
        className={`relative max-w-3xl mx-auto ${cardBg} border border-white/10 rounded-2xl overflow-hidden transform transition-transform duration-500 hover:-translate-y-2`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Viewport */}
        <div
          ref={containerRef}
          className="relative h-[320px] md:h-[440px] overflow-hidden"
        >
          {/* Tarjeta actual */}
          <div ref={currentRef} className="absolute inset-0">
            <Card src={images[index]} alt={`Imagen ${index + 1}`} />
          </div>

          {/* Tarjeta siguiente (para animación) */}
          <div
            ref={nextRef}
            className="absolute inset-0 pointer-events-none"
          >
            <Card
              src={images[(index + 1) % images.length]}
              alt={`Imagen ${
                (index + 1) % images.length || images.length
              }`}
            />
          </div>
        </div>

        {/* Controles */}
        <button
          type="button"
          onClick={prev}
          aria-label={
            language === "es" ? "Imagen anterior" : "Previous image"
          }
          className={`absolute top-1/2 left-3 -translate-y-1/2 ${arrowBtn} rounded-full p-2 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400`}
        >
          ‹
        </button>

        <button
          type="button"
          onClick={next}
          aria-label={
            language === "es" ? "Imagen siguiente" : "Next image"
          }
          className={`absolute top-1/2 right-3 -translate-y-1/2 ${arrowBtn} rounded-full p-2 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400`}
        >
          ›
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`${
                language === "es" ? "Ir a la imagen" : "Go to image"
              } ${i + 1}`}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index ? `${dotActive} scale-110` : dotInactive
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
      {/* Franja inferior tipo card */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}
