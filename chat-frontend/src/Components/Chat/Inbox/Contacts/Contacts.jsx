import { useContext } from 'react'
import { ChatContext } from '../../../../context/Chat/ChatContex'
import { AuthContext } from '../../../../auth/AuthContext'
import Contact from '../Contact'
import './Contacts.css'

function Contacts() {
  const { chatState } = useContext(ChatContext)
  const { auth } = useContext(AuthContext)
  const Contacts = chatState.contacts

  return (
    <div className="Contacts">
      <div className="Contacts-container">
        <div className="Contacts-content">
          {Contacts.filter((contact) => contact._id != auth.id).map(
            (contact) => (
              <Contact key={contact._id} contact={contact} />
            )
          )}
          <div className="extra-space"></div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
