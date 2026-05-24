import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link to="/" className="footer__brand font-headline-lg">Balport Liquors</Link>

        <div className="footer__info font-body-md">
          <span className="footer__info-item">Address: 123 Coastal Way, Balport</span>
          <span className="footer__info-item">Phone: (555) 012-3456</span>
          <div className="footer__socials">
            <a href="#" className="footer__info-item">Instagram</a>
            <a href="#" className="footer__info-item">Facebook</a>
          </div>
        </div>

        <div className="footer__copyright font-label-sm">
          © {new Date().getFullYear()} Balport Liquors. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
