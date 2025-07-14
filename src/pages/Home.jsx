import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <div className="d-flex justify-content-center gap-3 my-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" width="80" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React logo" width="80" />
        </a>
      </div>
      <h1 className="display-4">TIENDAMANIA GG</h1>
      <p className="lead">Vite + React + Bootstrap</p>
      <div className="card p-3 shadow-sm mx-auto" style={{ maxWidth: 400 }}>
        <button className="btn btn-primary mb-2" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edita <code>src/pages/Home.jsx</code> y guarda para probar HMR</p>
      </div>
    </div>
  )
}

export default Home
