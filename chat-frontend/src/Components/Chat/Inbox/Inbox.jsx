import Contacts from './Contacts'
import Header from './Header'
import Title from './Title'
import './Inbox.css'

function Inbox() {
  return (
    <div className="Inbox">
      <div className="Inbox-container">
        <div className="Inbox-content">
          <Header />
          <div className="Inbox-scroll">
            <Title />
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inbox
