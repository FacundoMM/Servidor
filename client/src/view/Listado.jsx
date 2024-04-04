import Eliminador from "../components/Eliminado.jsx"
import useAxios from "../hooks/useAxios.js"
import { NavLink } from "react-router-dom"

const Listado = () => {
  const { datos } = useAxios('http://localhost:8000/api/pirates/')

  const eliminar = Eliminador()
  return (
    <div>
      <h1 className='text-center'>Listado de Productos</h1>
      <div className="card-group justify-content-center" >
        {
          datos.map((data, i) => (
            <div className="row border border-3 m-1 rounded-3 bg-secondary  bg-opacity-25 bg-gradient" key={i} style={{ width: '90%' }}>
              <img src={data.image} alt="imagen del pirata" className="img-fluid rounded " style={{ height: '180px', width: '276px' }} />
              <div className="col ">
                <h5 className="card-title text-center">{data.name}</h5>
                <p className="text-center my-3">{data.phrase}</p>
                <div className="row ">
                  <button type="button" className="btn btn-info font-weight-normal col">
                    <NavLink to={`../pirates/${data._id}`} style={{ textDecoration: 'none', color: 'white' }}>view pirate</NavLink>
                  </button>
                  <button type="button" className="btn btn-danger ms-2 col" onClick={() => eliminar(data._id)}>Walk at Plank</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Listado
