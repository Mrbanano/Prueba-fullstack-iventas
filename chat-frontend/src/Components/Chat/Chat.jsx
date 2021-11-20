import { useState } from 'react'
import Conversation from './Chats/Conversation'
import Header from './Chats/Header'
import Sendbar from './Chats/Sendbar'
import Info from './Info'
import './Chat.css'

function Chat() {
  const [showInfo, setshowInfo] = useState(false)
  return showInfo ? (
    <Info showInfo={showInfo} setshowInfo={setshowInfo}  InfoVisible='InfoVisible'/>
  ) : (
    <div className="Chat Chat-visible">
      <div className="Chat-container">
        <div className="Chat-content">
          <Header showInfo={showInfo} setshowInfo={setshowInfo} />
          <Conversation />
          <Sendbar />
        </div>
      </div>
    </div>
  )
}

export default Chat
/**
 * <div className="Chat Chat-visible">
      <div className="Chat-container">
        <div className="Chat-content">
          <Header showInfo={showInfo} setshowInfo={setshowInfo} />
          <Conversation />
          <Sendbar />
        </div>
      </div>
    </div>
 */
