import IconImg from '/src/static/icon/icon.svg'
import './Icon.css'

function Icon() {
  return (
    <div className="Icon">
      <div className="Icon-container">
        <div className="Icon-content">
          <img src={IconImg} alt="Revisa tus" />
        </div>
      </div>
    </div>
  )
}

export default Icon
