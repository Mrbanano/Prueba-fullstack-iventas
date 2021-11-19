import './Message.css'

function Message({ message, type }) {
  const { Message, createdAt } = message
  return (
    <div className="Message">
      <div
        className={
          type === 'sent'
            ? 'Message-container sent'
            : ' Message-container received'
        }
      >
        <div className="Message-content">
          <p className="message">{Message}</p>
        </div>
      </div>
    </div>
  )
}

export default Message
