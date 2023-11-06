

export const CheckMyStatus = () => {
  return (
    <div className="bg-gnc bg-center bg-cover bg-local rounded h-40">
        <h2 className="font-bold text-center text-yellow-900 font-xl pt-3">Verificar Mi Estado</h2>
        <form className="opacity-100">
          <div className="m-2 px-1">
            <label className="text-yellow-500">Ingrese su numero de oblea</label>
            <input type="text" placeholder="ingrese aqui los datos"/>
          </div>
          <div className="flex justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 w-6/12 h-8 rounded-md text-white font-bold">Comprobar</button>
          </div>
        </form>
    </div>
  )
}
