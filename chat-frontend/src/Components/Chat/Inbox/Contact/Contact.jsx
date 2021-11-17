import './Contact.css'

function Contacts() {
  return (
    <div className="Contact">
      <div className="Contact-container">
        <div className="Contact-content">
          <div className="Contact-Avatar">
            <img src="https://i.imgur.com/2njx5VH.png" alt="Avatar" />
            <span className="status online"></span>
          </div>
          <div className="Contact-info">
            <div className="Contact-name">
              <span>nombre apellido</span>
            </div>
            <div className="Contact-status">
              <span>Estado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
