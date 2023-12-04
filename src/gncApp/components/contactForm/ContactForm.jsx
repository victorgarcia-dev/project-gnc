export const ContactForm = () => {
  return (
    <div>
        <h2 className="text-yellow-500 font-bold text-2xl mt-7 mb-3">Consultas</h2>
        <form>
            <div className="space-y-4">
                <div className="mt-3 grid grid-cols-1 gap-x-6 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                        <label className="block text-sm font-medium leading-6 text-yellow-500">Numero de Patente</label>
                        <div className="mt-2">
                           <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input type="text" name="patente" id="patente"  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md" placeholder="ingrese aquí"/>
                           </div>
                        </div>
                    </div>         
                </div>
                <div className="mt-3 grid grid-cols-1 gap-x-6 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                        <label className="block text-sm font-medium leading-6 text-yellow-500">Numero de Telefono</label>
                        <div className="mt-2">
                           <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input type="text" name="telefono" id="telefono"  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md" placeholder="ingrese aquí"/>
                           </div>
                        </div>
                    </div>         
                </div> 
                <div className="col-span-full">
                    <label className="block text-sm font-medium leading-6 text-yellow-500">Consulta</label>
                    <div className="mt-2">
                        <textarea id="consulta" name="consulta" rows="3" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Escriba su consulta.."></textarea>
                    </div>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 w-6/12 h-8 rounded-md text-white font-bold mt-2">Enviar</button>
            </div>
        </form>
    </div>
  )
}
