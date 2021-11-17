import './Message.css'

function Message({ item }) {
  return (
    <div className="Message">
      <div
        className={
          item % 2 === 0
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
