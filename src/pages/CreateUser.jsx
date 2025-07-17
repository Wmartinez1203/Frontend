import axios from 'axios'
import { useState } from 'react'

function CreateUser() {
  const [form, setForm] = useState({ nombre: '', correo: '', contraseña: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const URL = import.meta.env.VITE_API_GATEWAY;

  console.log('API Gateway URL:', URL)

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post(`${URL}/api/usuarios/create`, form)
      alert('Usuario creado')
    } catch (err) {
      console.error(err)
      alert('Error al crear usuario')
    }
  }

  return (
    <div className="container mt-4">
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="nombre" placeholder="Nombre" onChange={handleChange} />
        <input className="form-control mb-2" name="correo" placeholder="Correo" onChange={handleChange} />
        <input className="form-control mb-2" name="contraseña" placeholder="Contraseña" type="password" onChange={handleChange} />
        <button className="btn btn-success">Crear</button>
      </form>
    </div>
  )
}

export default CreateUser
