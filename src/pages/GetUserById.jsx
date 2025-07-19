import axios from 'axios'
import { useState } from 'react'

function GetUserById() {
  const [id, setId] = useState('')
  const [user, setUser] = useState(null)

  const URL = import.meta.env.VITE_API_GATEWAY;

  console.log('API Gateway URL:', URL)
  
  const fetchUser = async () => {
    try {
      const query = {
        query: `
          query {
            getUserById(id: ${id}) {
              id
              nombre
              correo
            }
          }
        `
      }
      const res = await axios.post(`${URL}/graphql`, query)
      setUser(res.data.data.getUserById)
    } catch {
      alert('Error al obtener usuario')
    }
  }

  return (
    <div className="container mt-4">
      <h2>Buscar Usuario por ID (GraphQL)</h2>
      <input className="form-control mb-2" placeholder="ID" onChange={e => setId(e.target.value)} />
      <button className="btn btn-info" onClick={fetchUser}>Buscar</button>
      {user && (
        <div className="mt-3 alert alert-secondary">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Nombre:</strong> {user.nombre}</p>
          <p><strong>Correo:</strong> {user.correo}</p>
        </div>
      )}
    </div>
  )
}

export default GetUserById
