"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function Contacto() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mensajeAlerta =
      language === "es"
        ? "Gracias por tu mensaje. Te contactaré pronto!"
        : "Thank you for your message. I'll contact you soon!";
    alert(mensajeAlerta);
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
      ? "shadow-[0_8px_30px_rgb(59,130,246,0.15)]"
      : "shadow-[0_8px_30px_rgb(0,0,0,0.4)]";

  const accentColor =
    theme === "light" ? "text-blue-600" : "text-orange-400";
  const textPrimary =
    theme === "light" ? "text-gray-900" : "text-gray-100";
  const textSecondary =
    theme === "light" ? "text-gray-600" : "text-gray-300";

  const inputBase =
    "w-full px-4 py-2 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200";

  const inputSkin =
    theme === "light"
      ? "bg-white/90 border border-blue-200 text-gray-900 placeholder-gray-400"
      : "bg-black/30 border border-blue-500/40 text-gray-100 placeholder-gray-400";

  const buttonSkin =
    theme === "light"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "bg-orange-500 hover:bg-orange-400 text-black";

  return (
    <section
      id="contacto"
      className={`py-16 px-4 md:px-20 ${containerBg} rounded-2xl ${shadowStyle} transition-all duration-500`}
    >
      <h2
        className={`text-3xl md:text-4xl font-bold ${accentColor} mb-4 text-center`}
      >
        {language === "es" ? "Mi Contacto" : "Contact Me"}
      </h2>

      <p
        className={`${textSecondary} text-sm md:text-base mb-10 text-center max-w-2xl mx-auto`}
      >
        {language === "es"
          ? "Si deseas comunicarte conmigo para oportunidades laborales, proyectos o colaboraciones, puedes usar los datos de contacto o enviarme un mensaje a través del formulario."
          : "If you want to contact me for job opportunities, projects or collaborations, you can use the contact details or send me a message through the form."}
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Información de contacto */}
        <div
          className={`${cardBg} border rounded-2xl p-6 md:p-8 ${shadowStyle} hover:-translate-y-2 hover:shadow-[0_12px_40px_rgb(59,130,246,0.25)] transition-all duration-300 flex flex-col gap-6`}
        >
          <h3
            className={`text-xl md:text-2xl font-bold mb-2 ${accentColor}`}
          >
            {language === "es"
              ? "Información de Contacto"
              : "Contact Information"}
          </h3>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md">
                <Image
                  src="/icons/email.png"
                  alt="Email icon"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <div>
                <p className={`font-semibold ${textPrimary}`}>Email</p>
                <a
                  href="mailto:edisongarcia890@gmail.com"
                  className={`text-sm md:text-base ${
                    theme === "light"
                      ? "text-blue-700"
                      : "text-orange-300"
                  } hover:underline break-all`}
                >
                  edisongarcia890@gmail.com
                </a>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md">
                <Image
                  src="/llamada.png"
                  alt="Phone icon"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <div>
                <p className={`font-semibold ${textPrimary}`}>
                  {language === "es" ? "Teléfono" : "Phone"}
                </p>
                <a
                  href="tel:+573114221921"
                  className={`text-sm md:text-base ${
                    theme === "light"
                      ? "text-blue-700"
                      : "text-orange-300"
                  } hover:underline`}
                >
                  +57 311 422 1921
                </a>
              </div>
            </div>

            {/* Ubicación */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center shadow-md">
                <Image
                  src="/ubi1.png"
                  alt="Location icon"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <div>
                <p className={`font-semibold ${textPrimary}`}>
                  {language === "es" ? "Ubicación" : "Location"}
                </p>
                <p className={`text-sm md:text-base ${textSecondary}`}>
                  Pasto, Nariño, Colombia
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md">
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn icon"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <div>
                <p className={`font-semibold ${textPrimary}`}>
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/edison-montero-886603368"
                  className={`text-sm md:text-base ${
                    theme === "light"
                      ? "text-blue-700"
                      : "text-orange-300"
                  } hover:underline break-all`}
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/edison-montero
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center shadow-md">
                <Image
                  src="/github.png"
                  alt="GitHub icon"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <div>
                <p className={`font-semibold ${textPrimary}`}>GitHub</p>
                <a
                  href="https://github.com/Andres8525"
                  className={`text-sm md:text-base ${
                    theme === "light"
                      ? "text-blue-700"
                      : "text-orange-300"
                  } hover:underline break-all`}
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Andres8525
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div
          className={`${cardBg} border rounded-2xl p-6 md:p-8 ${shadowStyle} hover:-translate-y-2 hover:shadow-[0_12px_40px_rgb(59,130,246,0.25)] transition-all duration-300`}
        >
          <h3
            className={`text-xl md:text-2xl font-bold mb-4 ${accentColor}`}
          >
            {language === "es"
              ? "Envíame un mensaje"
              : "Send me a message"}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="nombre"
                className={`block text-sm font-medium mb-2 ${textPrimary}`}
              >
                {language === "es" ? "Nombre" : "Name"}
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className={`${inputBase} ${inputSkin}`}
                placeholder={
                  language === "es"
                    ? "Tu nombre completo"
                    : "Your full name"
                }
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-2 ${textPrimary}`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`${inputBase} ${inputSkin}`}
                placeholder={
                  language === "es"
                    ? "tu@email.com"
                    : "your@email.com"
                }
              />
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className={`block text-sm font-medium mb-2 ${textPrimary}`}
              >
                {language === "es" ? "Mensaje" : "Message"}
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={4}
                className={`${inputBase} ${inputSkin} resize-none`}
                placeholder={
                  language === "es"
                    ? "Cuéntame en qué puedo ayudarte..."
                    : "Tell me how I can help you..."
                }
              />
            </div>

            <button
              type="submit"
              className={`w-full font-semibold py-3 rounded-lg ${buttonSkin} transition-all duration-300 shadow-md hover:shadow-lg`}
            >
              {language === "es"
                ? "Enviar Mensaje"
                : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}