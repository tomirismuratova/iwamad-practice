
import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'
import logo from '../assets/logo.svg'

type HeaderProps = {
  name: string
  role: string
}

function Header({ name, role }: HeaderProps) {
  const { likes } = useLikes()

  return (
    <header>
      <div className="header-brand">
        <img
          src={logo}
          alt=""
          width={32}
          height={32}
          className="header-logo"
        />

        <div>
          <h1>{name}</h1>
          <p>{role}</p>
        </div>
      </div>

      <p className="header-likes">❤️ {likes}</p>

      <nav aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/skills">
          Skills
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
