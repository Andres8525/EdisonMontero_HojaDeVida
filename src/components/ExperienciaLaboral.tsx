export default function ExperienciaLaboral() {
  return (
    <section id="experiencia" className="py-16 px-4 md:px-20 bg-[#20496E]">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-300 mb-8 text-center">Mi Experiencia Laboral</h2>
      <div className="bg-purple-200 text-black p-6 rounded-lg shadow-md max-w-2xl">
        <p className="mb-6">
          Tengo experiencia en 2 empresas Unitik internet sin límite estuve trabajando durante un año y 2 años como procesador en JF ZAMBRANO SAS
        </p>
        
        <div className="space-y-4">
          {/* Experiencia 1 */}
          <div className="border-l-4 border-orange-400 pl-4 py-2">
            <h3 className="font-bold text-lg">Procesador</h3>
            <p className="text-orange-600 font-semibold">JF ZAMBRANO SAS</p>
            <p className="text-sm text-gray-700">Duración: 2 años</p>
          </div>
          
          {/* Experiencia 2 */}
          <div className="border-l-4 border-orange-400 pl-4 py-2">
            <h3 className="font-bold text-lg">Unitik Internet Sin Límite</h3>
            <p className="text-sm text-gray-700">Duración: 1 año</p>
          </div>
        </div>
      </div>
    </section>
  );
}