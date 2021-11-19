import { useContext } from 'react'
import { AuthContext } from '../../../../auth/AuthContext'
import { ChatContext } from '../../../../context/Chat/ChatContex'
import Message from '../Message/Message'
import './Conversation.css'

function Conversation() {
  const { chatState } = useContext(ChatContext)
  const { auth } = useContext(AuthContext)

  const { messages } = chatState

  return (
    <div className="conversation-content">
      {messages.map((message) => (
        <Message
          message={message}
          type={message.Sender == auth.id ? 'sent' : 'received'}
        />
      ))}
    </div>
  )
}

export default Conversation
