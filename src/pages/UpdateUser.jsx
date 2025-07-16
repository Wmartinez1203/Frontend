import axios from 'axios'
import { useState } from 'react'

function UpdateUser() {
  const [form, setForm] = useState({ id: '', nombre: '', correo: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const URL = import.meta.env.VITE_API_GATEWAY;

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.put(`${URL}/api/usuarios/update/${form.id}`, {
        nombre: form.nombre,
        correo: form.correo
      })
      alert('Usuario actualizado')
    } catch {
      alert('Error al actualizar usuario')
    }
  }

  return (
    <div className="container mt-4">
      <h2>Actualizar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="id" placeholder="ID" onChange={handleChange} />
        <input className="form-control mb-2" name="nombre" placeholder="Nuevo nombre" onChange={handleChange} />
        <input className="form-control mb-2" name="correo" placeholder="Nuevo correo" onChange={handleChange} />
        <button className="btn btn-warning">Actualizar</button>
      </form>
    </div>
  )
}

export default UpdateUser
