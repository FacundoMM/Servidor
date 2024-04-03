import React from 'react'
import useAxios from "../hooks/useAxios.js"
import { useParams } from 'react-router-dom'
import Eliminado from '../componentes/Eliminado.jsx';


const Detalles = () => {
  const { id } = useParams();
  const { datos } = useAxios(`http://localhost:8000/api/Producto/${id}`)
  const  eliminar  = Eliminado()


  return (
    <>
      <h1 className='text-center'>Detalles del producto</h1>
      <div className='card bg-light mt-3 container' style={{ maxWidth: '30rem' }}>
        <h1 className='card-header'>{datos.title}</h1>
        <div className='card-body'>
          <p>Precio: {datos.price}</p>
          <p>Detalles del producto: {datos.description}</p>
        </div>
        <button type="button" className="btn btn-danger mb-2" onClick={() => eliminar(datos._id)}>Eliminar</button>
      </div>
    </>
  )
}

export default Detalles
