import Eliminador from "../componentes/Eliminado.jsx"
import useAxios from "../hooks/useAxios.js"
import { NavLink } from "react-router-dom"

const Listado = () => {
const { datos } = useAxios('http://localhost:8000/api/Producto/')
const  eliminar  = Eliminador()
  return (
    <div>
      <h1 className='text-center'>Listado de Productos</h1>
      <table className="table">
        <thead className="thead-light"> 
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
           {
           datos.map((data, i) =>(
              <tr key={i}>
                  <th>{i+1}</th>
                  <th>{data.title}</th>
                  <th>
                    <button type="button" className="btn btn-info font-weight-normal"><NavLink to={`../Detalles/${data._id}`} >Detalles</NavLink></button>
                    <button type="button" className="btn btn-success ms-2"><NavLink to={`../Editar/${data._id}`} >Editar</NavLink></button>
                    <button type="button" className="btn btn-danger ms-2" onClick={() => eliminar(data._id)}>Eliminar</button>
                  </th>
              </tr>
              ))
          }
            
        </tbody>
      </table>
    </div>
  )
}

export default Listado
