import './Chat.css'
import Conversation from './Chats/Conversation'
import Header from './Chats/Header'
import Sendbar from './Chats/Sendbar'

function Chat() {
  return (
    <div className="Chat">
      <div className="Chat-container">
        <div className="Chat-content">
          <Header />
          <Conversation/>
          <Sendbar />
        </div>
      </div>
    </div>
  )
}

export default Chat
