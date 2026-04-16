export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>Los Sabores De La Quinoa</h3>
          <p>
            Lo meora de la comida peruana en el corazón de Santiago.
          </p>
        </div>

        <div>
          <h4>Navegación</h4>
          <ul>
            <li>Nosotros</li>
            <li>Menú</li>
            <li>Galería</li>
            <li>Reservas</li>
          </ul>
        </div>

        <div>
          <h4>Horarios</h4>
          <ul>
            <li>Lun - Vie: 12:00 - 23:00</li>
            <li>Sáb - Dom: 13:00 - 00:00</li>
          </ul>
        </div>

        <div>
          <h4>Contacto</h4>
          <ul>
            <li>+56 9 1234 5678</li>
            <li>contacto@restaurant.cl</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Sabores De La Quinoa</p>
        <div className="social-links">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </footer>
  )
}