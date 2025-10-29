export default function Testimonios() {
  const testimonios = [
    {
      nombre: "Diego Mallama",
      cargo: "Ing. Software",
      texto: "Edison demostró excelentes habilidades de liderazgo y compromiso. Su puntualidad y dedicación fueron ejemplares durante los 2 años que trabajó con nosotros.",
      imagen: "/R2.jpg"
    },
    {
      nombre: "Yury Garcia",
      cargo: "Psicologa Alcaldia de Pasto",
      texto: "Un profesional comprometido con gran capacidad de aprendizaje. Siempre dispuesto a asumir nuevos retos y liderar actividades importantes.",
      imagen: "/R1.jpg"
    },
    {
      nombre: "Dayan Romo",
      cargo: "Coordinador Técnico - Unitik",
      texto: "Edison es una persona responsable y con iniciativa. Su experiencia técnica y habilidades interpersonales lo hacen un gran colaborador.",
      imagen: "/referencia3.jpg"
    }
  ];

  return (
    <section id="testimonios" className="py-16 px-4 md:px-20 bg-[#20496E]">
      <h2 className="text-2xl font-semibold text-orange-300 mb-6">Testimonios</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonios.map((testimonio, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:bg-white/15 transition-all">
            <div className="flex items-center mb-4">
              {/* Imagen de perfil de la referencia */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-400 mr-3 flex-shrink-0">
                <img
                  src={testimonio.imagen}
                  alt={testimonio.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-orange-300">{testimonio.nombre}</p>
                <p className="text-sm text-gray-300">{testimonio.cargo}</p>
              </div>
            </div>
            
            <p className="text-gray-200 italic">&ldquo;{testimonio.texto}&rdquo;</p>
          </div>
        ))}
      </div>
    </section>
  );
}