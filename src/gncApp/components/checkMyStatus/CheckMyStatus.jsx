

export const CheckMyStatus = () => {
  return (
    <div className="bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-yellow-500 via-gray-800 to-black h-40">
        <h2 className="font-bold text-center text-yellow-950 font-xl pt-3"><span className="text-yellow-500">Verificar</span>Mi Estado</h2>
        <form className="">
          <div className="m-2 px-1">
            <label className="text-white">Ingrese su numero de patente</label>
            <input className="px-2 rounded-md" type="text" placeholder="ingrese aqui los datos"/>
          </div>
          <div className="flex justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 w-6/12 h-8 rounded-md text-white font-bold">Comprobar</button>
          </div>
        </form>
    </div>
  )
}
