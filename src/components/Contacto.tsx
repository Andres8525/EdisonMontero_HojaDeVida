"use client";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias por tu mensaje. Te contactaré pronto!");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-16 px-4 md:px-20 bg-[#2A517E]">
      <h2 className="text-2xl font-semibold text-orange-300 mb-6">Mi Contacto</h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Información de contacto */}
        <div className="bg-purple-200 text-black p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-orange-600">Información de Contacto</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:edison.montero@example.com" className="text-blue-600 hover:underline">
                  edisongarcia890@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <p className="font-semibold">Teléfono</p>
                <a href="tel:+573001234567" className="text-blue-600 hover:underline">
                  +57 311 422 1921
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold">Ubicación</p>
                <p className="text-gray-700">Pasto, Nariño, Colombia</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-2xl">💼</span>
              <div>
                <p className="font-semibold">LinkedIn</p>
                <a href="#" className="text-blue-600 hover:underline">
                  linkedin.com/in/edison-montero
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-2xl">💻</span>
              <div>
                <p className="font-semibold">GitHub</p>
                <a href="#" className="text-blue-600 hover:underline">
                  github.com/Andres8525
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-orange-300">Envíame un mensaje</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Tu nombre"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}