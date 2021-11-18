import Contact from '../Contact'
import './Contacts.css'
function Contacts() {
  const contacts = [1]

  return (
    <div className="Contacts">
      <div className="Contacts-container">
        <div className="Contacts-content">
          {contacts.map((contact) => (
            <Contact key={contact} />
          ))}
          <div className="extra-space"></div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
