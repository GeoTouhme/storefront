import { NavLink } from 'react-router-dom'
import './Header.css'

function Header({ onMenuClick }) {
  return (
    <header className="header" id="top-nav">
      <div className="header__inner">
        <NavLink to="/" className="header__logo-icon" aria-label="Home">
          <img src="/logo.png" alt="Balport Liquors Logo" className="header__logo-img" />
        </NavLink>

        <NavLink to="/" className="header__brand">Balport Liquors</NavLink>

        <div className="header__right">
          <nav className="header__nav">
            <NavLink to="/" className={({ isActive }) => `header__nav-link font-label-sm ${isActive ? 'active' : ''}`} end>
              Home
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `header__nav-link font-label-sm ${isActive ? 'active' : ''}`}>
              Gallery
            </NavLink>
            <NavLink to="/deals" className={({ isActive }) => `header__nav-link font-label-sm ${isActive ? 'active' : ''}`}>
              Deals
            </NavLink>
          </nav>

          <button className="header__menu-btn" onClick={onMenuClick} aria-label="Open menu">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
