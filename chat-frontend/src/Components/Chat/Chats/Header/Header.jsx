import './Header.css'
function Header() {
  return (
    <header className="Chat-header">
      <div className="Chat-header-image">
        <img src="https://i.imgur.com/XQgYZYb.png" alt="Avatar de " />
      </div>
      <div className="header-info">
        <p className="header-info-name">Lucía González</p>
      </div>
      <div className="header-modal">
        <img src="/src/static/icon/more_vert.svg" alt="icono para mostrar" />
      </div>
    </header>
  )
}

export default Header
