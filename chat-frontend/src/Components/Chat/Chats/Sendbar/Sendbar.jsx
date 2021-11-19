import { useContext, useState } from 'react'
import { SocketContext } from '../../../../context/SocketContext'
import { AuthContext } from '../../../../auth/AuthContext'
import { ChatContext } from '../../../../context/Chat/ChatContex'
import './Sendbar.css'

function Sendbar() {
  const [Message, setMessage] = useState('')
  const { socket } = useContext(SocketContext)
  const { auth } = useContext(AuthContext)
  const { chatState } = useContext(ChatContext)

  const onChange = ({ target }) => {
    setMessage(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (Message.length === 0) {
      return
    }

    socket.emit('PrivateMessage', {
      Sender: auth.id,
      Receiver: chatState.receiver._id,
      Message: Message
    })

    //dispatch(sendMessage(Message))

    setMessage('')
  }

  return (
    <form onSubmit={onSubmit}>
      <section className="TextToSend">
        <input
          type="text"
          name="sendtxt"
          className="sendtxt"
          id="sendtxt"
          value={Message}
          onChange={onChange}
        />
        <button className="Send">
          <img src="/src/static/icon/send.svg" alt="send" />
        </button>
      </section>
    </form>
  )
}

export default Sendbar
