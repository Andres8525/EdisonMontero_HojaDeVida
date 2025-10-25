export default function Testimonios() {
  const testimonios = [
    {
      nombre: "Carlos Rodríguez",
      cargo: "Gerente de Operaciones - JF ZAMBRANO SAS",
      texto: "Edison demostró excelentes habilidades de liderazgo y compromiso. Su puntualidad y dedicación fueron ejemplares durante los 2 años que trabajó con nosotros.",
      foto: "👤"
    },
    {
      nombre: "Ana María López",
      cargo: "Supervisora de Equipo",
      texto: "Un profesional comprometido con gran capacidad de aprendizaje. Siempre dispuesto a asumir nuevos retos y liderar actividades importantes.",
      foto: "👤"
    },
    {
      nombre: "Miguel Torres",
      cargo: "Coordinador Técnico - Unitik",
      texto: "Edison es una persona responsable y con iniciativa. Su experiencia técnica y habilidades interpersonales lo hacen un gran colaborador.",
      foto: "👤"
    }
  ];

  return (
    <section id="testimonios" className="py-16 px-4 md:px-20 bg-[#20496E]">
      <h2 className="text-2xl font-semibold text-orange-300 mb-6">Testimonios</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonios.map((testimonio, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:bg-white/15 transition-all">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-3">{testimonio.foto}</div>
              <div>
                <p className="font-bold text-orange-300">{testimonio.nombre}</p>
                <p className="text-sm text-gray-300">{testimonio.cargo}</p>
              </div>
            </div>
            
            <p className="text-gray-200 italic">"{testimonio.texto}"</p>
            
            <div className="flex text-orange-400 mt-4">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}