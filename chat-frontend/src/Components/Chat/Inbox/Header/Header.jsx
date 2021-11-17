import './Header.css'

function Header() {
  return (
    <div className="Inbox-header">
      <div className="Inbox-header-avatar">
        <img
          className="Inbox-header-img"
          src="https://avatars0.githubusercontent.com/u/17098477?s=460&v=4"
          alt="avatar"
        />
      </div>
      <div className="Inbox-header-text">
        <p className="Inbox-header-text-name">Alejandro García</p>
        <p className="Inbox-header-text-number">5520260240</p>
      </div>
    </div>
  )
}

export default Header
