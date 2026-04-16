import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import type { MenuItem } from '../types/MenuItem'

export default function Menu() {
  const [menu, setMenu] = useState<MenuItem[]>([])

  useEffect(() => {
    setMenu([
      {
        id: 1,
        name: 'Lomo Saltado',
        description: 'Delicioso plato peruano',
        price: 12000,
        imageUrl: 'https://source.unsplash.com/400x300/?food'
      }
    ])
  }, [])

  return (
    <div>
      <Navbar />

      <section className="container grid">
        {menu.map(item => (
          <div key={item.id} className="card">
            <img src={item.imageUrl} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <strong>${item.price}</strong>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  )
}