import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CreateUser from './pages/CreateUser'
import DeleteUser from './pages/DeleteUser'
import UpdateUser from './pages/UpdateUser'
import GetUserById from './pages/GetUserById'
import RegisterGame from './pages/RegisterGame'
import RoleSOAP from './pages/RoleSOAP'

// ✅ Vista de inicio opcional
function Home() {
  return (
    <div className="container mt-4">
      <h2>Bienvenido a TIENDAMANIA GG</h2>
      <p>Selecciona una opción en el menú para comenzar.</p>
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* ✅ Ruta raíz "/" */}
        <Route path="/" element={<Home />} />

        {/* Rutas funcionales */}
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/delete-user" element={<DeleteUser />} />
        <Route path="/update-user" element={<UpdateUser />} />
        <Route path="/get-user" element={<GetUserById />} />
        <Route path="/register-game" element={<RegisterGame />} />
        <Route path="/roles" element={<RoleSOAP />} />

        {/* Ruta catch-all opcional */}
        <Route path="*" element={<h2 className="text-center mt-4">404 - Página no encontrada</h2>} />
      </Routes>
    </>
  )
}

export default App
