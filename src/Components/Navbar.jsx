import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">⚛️ React Profile</div>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/profile">
          Profile
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar