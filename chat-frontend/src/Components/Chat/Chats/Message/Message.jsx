import './Message.css'

function Message({ message, type }) {
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
          <p className="message">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Message
