import { NavLink, Route, Routes } from "react-router-dom"
import Listado from "./view/Listado"
import Agregar from "./view/Agregar"
import Detalles from "./view/Detalles"


function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient bg-opacity-25 ">
        <div className="container-fluid">
          <h1 className="navbar-brand" href="#">Pirate Ship</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active"  to="/">Crew Board</NavLink >
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pirates/new">Add Pirate</NavLink >
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Listado />} />
        <Route path="/pirates/new" element={<Agregar />} />
        <Route path="/pirates/:id" element={<Detalles />} />
      </Routes>
    </>
  )
}

export default App
