import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />

      <header
        className="header"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
      >
        Bienvenido a nuestro Restaurant
      </header>

      <section className="container">
        {/* HISTORIA */}
        <div className="section">
          <h2>Nuestra Historia</h2>
          <p>
            Desde 1987 entregando experiencias gastronómicas únicas, combinando tradición y modernidad.
          </p>
        </div>

        {/* NOTICIAS */}
        <div className="section">
          <h2>Noticias</h2>

          <div className="grid">
            <div className="card">
              <img src="https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/node/article/field_image/cebiche.jpg?h=c8a745b3&itok=X5GD3tnC" />
              <h3>Nuevo Menú de Temporada</h3>
              <p>
                Hemos incorporado nuevos platos con ingredientes frescos de temporada.
              </p>
            </div>

            <div className="card">
              <img src="https://www.yakumanka.com/wp-content/uploads/2018/12/gaston-acurio-cover1.jpg" />
              <h3>Chef Invitado</h3>
              <p>
                Este mes contamos con un chef internacional que trae nuevas propuestas.
              </p>
            </div>

            <div className="card">
              <img src="https://supermercadoaldia.cl/wp-content/uploads/2025/07/Copia-de-Sin-titulo-1000-%C3%97-600-px_20250723_232342_0000.jpg" />
              <h3>Renovación del Local</h3>
              <p>
                Hemos renovado nuestros espacios para brindar una mejor experiencia.
              </p>
            </div>
            
          </div>

          <div className="grid">
            <div className="card">
              <img src="https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/node/article/field_image/cebiche.jpg?h=c8a745b3&itok=X5GD3tnC" />
              <h3>Nuevo Menú de Temporada</h3>
              <p>
                Hemos incorporado nuevos platos con ingredientes frescos de temporada.
              </p>
            </div>

            <div className="card">
              <img src="https://www.yakumanka.com/wp-content/uploads/2018/12/gaston-acurio-cover1.jpg" />
              <h3>Chef Invitado</h3>
              <p>
                Este mes contamos con un chef internacional que trae nuevas propuestas.
              </p>
            </div>

            <div className="card">
              <img src="https://supermercadoaldia.cl/wp-content/uploads/2025/07/Copia-de-Sin-titulo-1000-%C3%97-600-px_20250723_232342_0000.jpg" />
              <h3>Renovación del Local</h3>
              <p>
                Hemos renovado nuestros espacios para brindar una mejor experiencia.
              </p>
            </div>
            
          </div>
          
        </div>
      </section>

      <Footer />
    </div>
  )
}