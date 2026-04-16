import { useState } from 'react'

import api from '../services/api'
import type  { MenuItem } from '../types/MenuItem'

export default function Admin() {
  //const [menu, setMenu] = useState<MenuItem[]>([])
  const [form, setForm] = useState<Omit<MenuItem, 'id'>>({
    name: '',
    description: '',
    price: 0,
    imageUrl: ''
  })

  // const loadMenu = () => {
  //   api.get<MenuItem[]>('/menu').then(res => setMenu(res.data))
  // }

  // useEffect(() => {
  //   loadMenu()
  // }, [])

  const handleSubmit = async () => {
    await api.post('/menu', form)
    //loadMenu()
  }

  // const handleDelete = async (id: number) => {
  //   await api.delete(`/menu/${id}`)
  //   loadMenu()
  // }

  return (
    <div className="container admin">
      <h1>Administrador</h1>

      <div className="grid">
        <input placeholder="Nombre" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Descripción" onChange={e => setForm({ ...form, description: e.target.value })} />
        <input type="number" placeholder="Precio" onChange={e => setForm({ ...form, price: Number(e.target.value) })} />
        <input placeholder="Imagen URL" onChange={e => setForm({ ...form, imageUrl: e.target.value })} />
        <button onClick={handleSubmit}>Guardar</button>
      </div>
    </div>
  )
}