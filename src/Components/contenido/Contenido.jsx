import PropTypes from 'prop-types'; 
import { usuarios } from '../util/jeisongnc.jsx';
/*import { Matricula } from '../main/Main';
import style from "./contenido.module.css";*/

export const Contenido = ({usuario}) => {

	

  return(
      <>
		<h2 className='font-extrabold h-12 pl-6 min-[468px]:text-center max-[600px]:bg-sky-468'>REPORTE DEL EQUIPO CONSULTADO</h2>
			<section className='columns-3 rounded-lg w-3/4 text-sm border-2 p-2'>
				<div className='font-bold'>DATOS DE LA OBLEA
					<p className='font-normal bg-gainsboro'>Oblea anterior: {usuario.Oblea_anterior} </p>
					<p className='font-normal'>Fecha de Habilitación: {usuario.Fecha_de_habilitación}</p>
					<p className='font-normal bg-gainsboro'>Fecha de Oblea anterior: {usuario.Fecha_Oblea_anterior}</p>
					<p className='font-normal'>Código PEC: {usuario.Codigo_PEC}</p>
					<p className='font-normal bg-gainsboro'>Código Taller: {usuario.Codigo_de_taller}</p>
					<p className='font-bold text-white bg-black p-1'>Operación: {usuario.Tipo_de_Operación}</p>
				</div>
				<div className='font-bold'>DATOS DEL VEHICULO
					<p className='font-normal bg-gainsboro'>Marca: {usuario.Vehículo_Marca}</p>
					<p className='font-normal'>Modelo: {usuario.Modelo}</p>
					<p className='font-normal bg-gainsboro'>Año: {usuario.Año}</p>
					<p className='font-bold text-white bg-black p-1'>Dominio: {usuario.Dominio}</p>
					<p className='font-normal bg-gainsboro'>Inyección: {usuario.Inyección}</p>
					<p className='font-normal'>Tipo de Vehículo: {usuario.Tipo_de_Vehículo}</p>
					<p className='font-normal'> </p>
				</div>
				<div className='font-bold'>DATOS DEL PROPIETARIO
					<p className='font-normal bg-gainsboro'>Propietario: {usuario.Propietario_Nombre_y_Apellido}</p>
					<p className='font-normal'>Domicilio: {usuario.Dirección}</p>
					<p className='font-normal bg-gainsboro'>CP: {usuario.Codigo_Postal}</p>
					<p className='font-normal'>Localidad: {usuario.Localidad}</p>
					<p className='font-normal bg-gainsboro'>Teléfono: {usuario.Teléfono}</p>
				</div>
			</section>
			<br />		
			<section className='columns-4 rounded-lg w-3/4 h-40 border-2 p-2 text-sm min-[468px]:text-center max-[600px]:bg-sky-468'>
				<div className='font-bold'>DATOS DEL REGULADOR
					<div>
						<p className='font-normal bg-gainsboro'>Código Regulador: {usuario.Codigo_Actual}</p>
						<p className='font-normal'>Serie Actual: {usuario.Nro_Serie_Actual}</p>
					</div>
					<div>
						<br />
						<p className='font-normal'>Código Montaje: {usuario.Codigo_Montaje}</p>
						<p className='font-normal bg-gainsboro'>Serie Montaje: {usuario.Nro_Serie_Montaje}</p>
					</div>
					<div>
						<br />
						<p className='font-normal bg-gainsboro'>Código de Desmontaje:{usuario.Codigo_Desmontaje}</p>
						<p className='font-normal'>Serie desmontaje:{usuario.Nro_Serie_Desmontaje}</p>					
					</div>
					<div>
						<br />
						<p className='font-normal'>Código de Baja: {usuario.Codigo_Baja}</p>
						<p className='font-normal bg-gainsboro'>Serie Baja: {usuario.Nro_Serie_Baja}</p>
					</div>
				</div>
			</section>
			<br />
			<section className='columns-3 rounded-lg w-3/4 h-48 border-2 p-2 text-sm min-[468px]:text-center max-[600px]:bg-sky-468'>
			<h2 className='font-bold'>CILINDROS</h2>
				<div>

					<div className='columns-3 italic h-14'>
						<div>
							<p className=' bg-gainsboro'>Código: {usuario.Codigo}</p>
							<p>Serie:{usuario.Nro_Serie}</p>
						</div>
						<div>
							<p>Nuevo: {usuario.Nuevo}</p>
							<p className=' bg-gainsboro'>Usado: {usuario.Usado}</p>
						</div>
						<div>
							<p className=' bg-gainsboro'>Fab. Mes: {usuario.Fabricado_Mes}</p>
							<p>Fab. Año: {usuario.Fabricado_Año}</p>
						</div>
					</div>
														
					<div>
						
						<div>							
							<p className='font-bold bg-gainsboro'>VALVULA</p>						
							<p>Código: {usuario.Codigo_Valvula}</p>							
							<p className=' bg-gainsboro'>Serie: {usuario.Nro_Serie_Valvula}</p>
							<p>Operación: {usuario.OP_V}</p>
						</div>
                        </div>
					<div>		
                        <h3 className='font-bold'>PRUEBA HIDRAULICA</h3>	
						<p className=' bg-gainsboro'>Mes: {usuario.Revisado_Mes}</p>
						<p className='font-bold text-white bg-black p-1'>Año: {usuario.Revisado_Ano}</p>							
						<p className=' bg-gainsboro'>P. H.: {usuario.CRPC}</p>
					</div>
				</div>
					
			</section>
			<br />
			

      </>
    );
  };

  Contenido.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    usuario: PropTypes.object.isRequired, 
    titulo: PropTypes.string.isRequired}


    Contenido.defaultProps = {
        titulo: 'default',
      }
 