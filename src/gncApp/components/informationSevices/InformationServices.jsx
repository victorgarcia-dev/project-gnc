export const InformationServices = () => {
  return (
    <div>
      <h2 className="text-yellow-500 font-bold text-2xl mt-7 mb-3">Servicios</h2>
      <div className="max-w-sm mt-3 w-full lg:max-w-full lg:flex">
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-ph bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-gradient-radial- bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-neutral-500 via-neutral-700 to-neutral-900">
            <div className="mb-3">
              <h3 className="text-white font-bold text-xl mb-2">Prueba hidraulica</h3>
              <p className="text-white text-base">Los cilindros y la valvula son sometidos a alta presión a fin de comprobar que no exista fatiga en los materiales. En tal caso, el centro de Reprueba debe destruirlo, y devolver el certificado de destrucción para ser asentado en el registro.</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 w-6/12 h-8 rounded-md text-white font-bold mt-2">pedir turno</button>
            </div>
          </div>
      </div> 
      <div className="max-w-sm mt-3 w-full lg:max-w-full lg:flex">
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-oblea bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-neutral-500 via-neutral-700 to-neutral-900">
            <div className="mb-3">
              <h3 className="text-white font-bold text-xl mb-2">Renovar la oblea</h3>
              <p className="text-white text-base">La renovación de la Oblea es anual. Sin ella no puede cargar GNC en ninguna estación</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 w-6/12 h-8 rounded-md text-white font-bold mt-2">pedir turno</button>
            </div>
          </div>
      </div>   
    </div>
  )
}
