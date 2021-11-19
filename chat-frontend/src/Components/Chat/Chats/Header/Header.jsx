import { useContext } from 'react'
import { ChatContext } from '../../../../context/Chat/ChatContex'
import { types } from '../../../../types/types'
import './Header.css'

function Header({ showInfo, setshowInfo }) {
  const { chatState, dispatch } = useContext(ChatContext)
  const { Name, lastName, Avatar } = chatState.receiver

  const Return = () => {
    dispatch({
      type: types.clearUserSelected,
      payload: []
    })
  }

  const ShowInfo = () => {
    setshowInfo(!showInfo)
  }

  return (
    <header className="Chat-header">
      <div className="header-modal  return" onClick={Return}>
        <img src="/src/static/icon/arrow_back.svg" alt="icono para atras" />
      </div>
      <div className="Chat-header-image">
        <img src={Avatar} alt={`Avatar de ${Name} ${lastName}`} />
      </div>
      <div className="header-info">
        <p className="header-info-name">{`${Name} ${lastName}`}</p>
      </div>
      <div className="header-modal" onClick={ShowInfo}>
        <img src="/src/static/icon/more_vert.svg" alt="icono para mostrar" />
      </div>
    </header>
  )
}

export default Header
