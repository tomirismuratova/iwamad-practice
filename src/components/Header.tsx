import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'

type HeaderProps = {
  name: string
  role: string
}

function Header({ name, role }: HeaderProps) {
  const { likes } = useLikes()

  return (
    <header>
      <h1>{name}</h1>
      <p>{role}</p>

      <p>❤️ {likes}</p>

      <nav>
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