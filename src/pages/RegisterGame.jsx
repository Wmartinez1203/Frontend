import axios from 'axios'
import { useState } from 'react'

function RegisterGame() {
  const [form, setForm] = useState({ title: '', description: '', price: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const URL = import.meta.env.VITE_API_GATEWAY;

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post(`${URL}/api/games/register`, {
        title: form.title,
        description: form.description,
        price: parseFloat(form.price)
      })
      alert('Juego registrado')
    } catch {
      alert('Error al registrar juego')
    }
  }

  return (
    <div className="container mt-4">
      <h2>Registrar Nuevo Juego</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="title" placeholder="Título" onChange={handleChange} />
        <input className="form-control mb-2" name="description" placeholder="Descripción" onChange={handleChange} />
        <input className="form-control mb-2" name="price" placeholder="Precio" onChange={handleChange} />
        <button className="btn btn-primary">Registrar</button>
      </form>
    </div>
  )
}

export default RegisterGame
