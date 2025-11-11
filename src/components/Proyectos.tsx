export default function Proyectos() {
  const proyectos = [
    {
      titulo: "Proyecto Web Personal",
      descripcion: "Página personal desarrollada con Next.js y Tailwind CSS",
      tecnologias: ["Next.js", "React", "Tailwind CSS"],
      estado: "Completado"
    },
    {
      titulo: "Sistema de Gestión",
      descripcion: "Aplicación para gestión de inventario y procesos",
      tecnologias: ["JavaScript", "Node.js", "CSS"],
      estado: "En desarrollo"
    },
    {
      titulo: "Proyecto de Automatización",
      descripcion: "Scripts y herramientas para automatizar tareas repetitivas",
      tecnologias: ["Python", "JavaScript"],
      estado: "Completado"
    }
  ];

  return (
    <section id="proyectos" className="py-16 px-4 md:px-20 bg-[#2A517E]">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-300 mb-8 text-center">Mis Proyectos</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {proyectos.map((proyecto, idx) => (
          <div key={idx} className="bg-purple-200 text-black p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="mb-3">
              <h3 className="text-xl font-bold mb-2">{proyecto.titulo}</h3>
              <span className={`text-xs px-3 py-1 rounded-full ${
                proyecto.estado === "Completado" 
                  ? "bg-green-500 text-white" 
                  : "bg-yellow-500 text-black"
              }`}>
                {proyecto.estado}
              </span>
            </div>
            
            <p className="mb-4 text-gray-700">{proyecto.descripcion}</p>
            
            <div className="flex flex-wrap gap-2">
              {proyecto.tecnologias.map((tech, i) => (
                <span key={i} className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}