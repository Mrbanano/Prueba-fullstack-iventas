import { useContext } from 'react'
import { ChatContext } from '../../../../context/Chat/ChatContex'
import { types } from '../../../../types/types'
import { getChatHistory } from '../../../../services/auth'
import './Contact.css'
import { scrollToBottom } from '../../../../helpers/scroll'

function Contacts({ contact }) {
  const { chatState, dispatch } = useContext(ChatContext)

  const { Avatar, Name, lastName, online } = contact
  let status = online ? 'online' : 'offline'

  const chatSelected = async () => {
    dispatch({
      type: types.userSelected,
      payload: contact
    })
    const { data } = await getChatHistory(contact._id)
    dispatch({
      type: types.loadingHistory,
      payload: data
    })

    scrollToBottom('conversation-content')
  }

  return (
    <div
      className={`Contact  ${
        contact._id == chatState.receiver?._id ? 'Select' : ''
      } `}
      onClick={chatSelected}
    >
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
