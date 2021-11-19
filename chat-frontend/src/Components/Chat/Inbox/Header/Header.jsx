import { useContext } from 'react'
import { AuthContext } from '../../../../auth/AuthContext'
import './Header.css'

function Header() {
  const { auth, logout } = useContext(AuthContext)

  return (
    <div className="Inbox-header">
      <div className="Inbox-header-avatar">
        <img
          className="Inbox-header-img"
          src={auth.Avatar}
          alt={`${auth.Name}-${auth.lastName}-`}
        />
      </div>
      <div className="Inbox-header-text">
        <p className="Inbox-header-text-name">{`${auth.Name}  ${auth.lastName}.`}</p>
        <p className="Inbox-header-text-number">{auth.Phone}</p>

        <button class="Inbox-logout" onClick={logout}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  )
}

export default Header
