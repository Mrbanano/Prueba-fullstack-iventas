import Info from '../Info'
import Chat from '../../Chat'
import './ChatContent.css'

function ChatContent() {
  return (
    <div className="ChatContent">
      <div className="ChatContent-container">
        <div className="ChatContent-content">
          <Chat />
          <Info />
        </div>
      </div>
    </div>
  )
}

export default ChatContent
