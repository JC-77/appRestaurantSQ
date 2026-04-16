import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
       <div className="logo">
        <img src="/logo.png" alt="Logo" />
        <span>Mi Restaurant</span>
        </div>

      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={open ? 'open' : ''}>
        <li>Inicio</li>
        <li>Menú</li>
        <li>Galería</li>
        <li>Contacto</li>
      </ul>
    </nav>
  )
}