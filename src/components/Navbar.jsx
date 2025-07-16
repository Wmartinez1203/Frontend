import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-3">
        <Link className="navbar-brand" to="/">TIENDAMANIA GG</Link>

        {/* Botón hamburguesa para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/create-user">Crear Usuario</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/delete-user">Eliminar Usuario</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/update-user">Actualizar Usuario</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/get-user">Buscar Usuario</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register-game">Registrar Juego</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/roles">Roles (SOAP)</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
