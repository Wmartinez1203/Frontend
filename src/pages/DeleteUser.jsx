import axios from 'axios'
import { useState } from 'react'

function DeleteUser() {
  const [id, setId] = useState('')

  const URL = import.meta.env.VITE_API_GATEWAY;

  console.log('API Gateway URL:', URL)
  
  const handleDelete = async () => {
    try {
      await axios.delete(`${URL}/api/usuarios/delete/${id}`)
      alert('Usuario eliminado')
    } catch (err) {
      alert('Error al eliminar usuario')
    }
  }

  return (
    <div className="container mt-4">
      <h2>Eliminar Usuario</h2>
      <input className="form-control mb-2" placeholder="ID de usuario" onChange={e => setId(e.target.value)} />
      <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
    </div>
  )
}

export default DeleteUser
