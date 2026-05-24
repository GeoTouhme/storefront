import { NavLink } from 'react-router-dom'
import './MobileDrawer.css'

function MobileDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`drawer-overlay ${isOpen ? 'drawer-overlay--visible' : ''}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`drawer ${isOpen ? 'drawer--open' : ''}`}>
        <div className="drawer__header">
          <span className="drawer__title font-headline-lg">Balport Liquors</span>
          <button className="drawer__close" onClick={onClose} aria-label="Close menu">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="drawer__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `drawer__link font-body-lg ${isActive ? 'drawer__link--active' : ''}`}
            onClick={onClose}
          >
            <span className="material-symbols-outlined">home</span>
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => `drawer__link font-body-lg ${isActive ? 'drawer__link--active' : ''}`}
            onClick={onClose}
          >
            <span className="material-symbols-outlined">gallery_thumbnail</span>
            Gallery
          </NavLink>
          <NavLink
            to="/deals"
            className={({ isActive }) => `drawer__link font-body-lg ${isActive ? 'drawer__link--active' : ''}`}
            onClick={onClose}
          >
            <span className="material-symbols-outlined">local_offer</span>
            Deals
          </NavLink>
        </nav>
      </div>
    </>
  )
}

export default MobileDrawer
