import {Contenido} from "./contenido/Contenido"
import { useState, useContext } from "react";
import { usuarios} from '../Components/util/jeisongnc';

export default function Consulta () {

    const[value, setValue] = useState ({nroPatente:''});
    
    const handleInputChange = (event) => {
        const {name, value} = event.target;
   
        setValue({
         ...value, [name]: value
        });
     } 

    const dominio = (event) => {
        event.preventDefault();
        console.log(value.nroPatente)
    }

    return(
        <div>            
            <h2>BUSQUEDA POR DOMINIO</h2> 
            <form onSubmit={dominio}>
                <div className="m-2 px-1">               
                        <label className="text-white">Patente:</label>
                        <input value={value.nroPatente} onChange={handleInputChange} name='nroPatente'/>
                </div>
                <div>
                    <button type="submit">Consulta por Dominio</button>
                    
                </div>
                
             </form>
        </div>
    )
}