import React from 'react'
import useAxios from "../hooks/useAxios.js"
import { useParams } from 'react-router-dom'
import Eliminado from '../components/Eliminado.jsx';
import Editar from '../components/Editar.jsx'

const Detalles = () => {
  const { id } = useParams();
  console.log(id)
  const { datos } = useAxios(`http://localhost:8000/api/pirates/${id}`, 'ver');
  const eliminar = Eliminado();
  const editar = Editar();
    
    if (!datos) {
      return <p>Cargando...</p>; 
    }
  
    if (Object.keys(datos).length === 0) {
      return <p>No se encontraron datos</p>; 
    }

  return (
    <>
      <h1 className='text-center'>{datos.name}</h1>
      <div className='card bg-light mt-3 container' style={{ maxWidth: '30rem' }}>
        <img src={datos.image} className='card-header' />
        <div className='card-body'>
          <p>Phrase: {datos.phrase}</p>
          <p>Treasures: {datos.treasure}</p>
          <p>Position: {datos.position}</p>
        </div>
        <div className='row text-center'>
          <div className='col'>
            <p>Peg Leg</p>
            {
              datos.accessory[0] ? (
                <button type="button" className="btn btn-primary mb-2"  onClick={() => (editar(datos._id, datos, 0))}>YES</button>
              ) : (
                <button type="button" className="btn btn-success mb-2" onClick={() => (editar(datos._id, datos, 0))} >NO</button>
              )
            }
          </div>
          <div className='col'>
            <p>Eye Patch</p>
            {
              datos.accessory[1] ? (
                <button type="button" className="btn btn-primary mb-2" onClick={() => (editar(datos._id, datos, 1))}>YES</button>
              ) : (
                <button type="button" className="btn btn-success mb-2" onClick={() => (editar(datos._id, datos, 1))}>NO</button>
              )
            }
            
          </div>
          <div className='col'>
            <p>Hook hand</p>
            {
              datos.accessory[2] ? (
                <button type="button" className="btn btn-primary mb-2" onClick={() => (editar(datos._id, datos, 2))}>YES</button>
              ) : (
                <button type="button" className="btn btn-success mb-2" onClick={() => (editar(datos._id, datos, 2))}>NO</button>
              )
            }
          </div>
        </div>
        <button type="button" className="btn btn-danger mb-2" onClick={() => eliminar(datos._id)}>Eliminar</button>
      </div>
    </>
  )
}

export default Detalles
