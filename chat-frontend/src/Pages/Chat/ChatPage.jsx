import Chat from '../../Components/Chat'
import Info from '../../Components/Chat/Info'
import Inbox from '../../Components/Chat/Inbox'
import ChatSelect from '../../Components/Chat/ChatSelect'
import './ChatPage.css'
import { useContext } from 'react'
import { ChatContext } from '../../context/Chat/ChatContex'

function ChatPage() {
  const { chatState } = useContext(ChatContext)
  return (
    <div className="ChatPage">
      <div className="ChatPage-container">
        <div className="ChatPage-content">
          <Inbox />
          {chatState.receiver ? (
            <div>
              <Chat />
              <Info />
            </div>
          ) : (
            <ChatSelect />
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatPage
