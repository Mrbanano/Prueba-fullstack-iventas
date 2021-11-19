import { useContext } from 'react'
import { ChatContext } from '../../context/Chat/ChatContex'

import ChatSelect from '../../Components/Chat/ChatSelect'
import ChatContent from '../../Components/Chat/ChatContet'
import Inbox from '../../Components/Chat/Inbox'

import './ChatPage.css'

function ChatPage() {
  const { chatState } = useContext(ChatContext)
  return (
    <div className="ChatPage">
      <div className="ChatPage-container">
        <div className="ChatPage-content">
          <Inbox />
          {chatState.receiver ? <ChatContent /> : <ChatSelect />}
        </div>
      </div>
    </div>
  )
}

export default ChatPage
