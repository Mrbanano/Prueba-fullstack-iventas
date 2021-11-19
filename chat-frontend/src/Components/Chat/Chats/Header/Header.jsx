import { useContext } from 'react'
import { ChatContext } from '../../../../context/Chat/ChatContex'
import './Header.css'
function Header() {
  const { chatState } = useContext(ChatContext)
  const { Name, lastName, Avatar } = chatState.receiver
  return (
    <header className="Chat-header">
      <div className="Chat-header-image">
        <img src={Avatar} alt={`Avatar de ${Name} ${lastName}`} />
      </div>
      <div className="header-info">
        <p className="header-info-name">{`${Name} ${lastName}`}</p>
      </div>
      <div className="header-modal">
        <img src="/src/static/icon/more_vert.svg" alt="icono para mostrar" />
      </div>
    </header>
  )
}

export default Header
