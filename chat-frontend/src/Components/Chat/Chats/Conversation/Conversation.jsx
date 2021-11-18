import Message from '../Message/Message'
import './Conversation.css'

function Conversation() {
  const a = Array.from(Array(2.0).keys())
  return (
    <div className="conversation-content">
      {a.map((item) => (
        <Message item={item} key={item} />
      ))}
    </div>
  )
}

export default Conversation
