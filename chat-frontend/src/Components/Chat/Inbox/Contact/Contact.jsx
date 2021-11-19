import { useContext } from 'react'
import { ChatContext } from '../../../../context/Chat/ChatContex'
import { types } from '../../../../types/types'
import './Contact.css'

function Contacts({ contact }) {
  const { dispatch } = useContext(ChatContext)

  const { Avatar, Name, lastName, online } = contact
  let status = online ? 'online' : 'offline'

  const chatSelected = () => {
    dispatch({
      type: types.userSelected,
      payload: contact
    })
  }

  return (
    <div className="Contact" onClick={chatSelected}>
      <div className="Contact-container">
        <div className="Contact-content">
          <div className="Contact-Avatar">
            <img src={Avatar} alt={`Avatar de ${Name} ${lastName}`} />
            <span className={`status ${status}`}></span>
          </div>
          <div className="Contact-info">
            <div className="Contact-name">
              <span>{`${Name} ${lastName}`}</span>
            </div>
            <div className="Contact-status">
              <span>{status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
