import Chat from '../../Components/Chat'
import Info from '../../Components/Chat/Info'
import Inbox from '../../Components/Chat/Inbox'
import './ChatPage.css'

function ChatPage() {
  return (
    <div className="ChatPage">
      <div className="ChatPage-container">
        <div className="ChatPage-content">
          <Inbox />
          <Chat />
          <Info />
        </div>
      </div>
    </div>
  )
}

export default ChatPage
