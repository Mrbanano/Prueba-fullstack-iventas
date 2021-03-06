import './ChatSelect.css'
import Ilustration from '/src/static/img/Ilustration.svg'

function ChatSelect() {
  return (
    <div className="ChatSelect">
      <div className="ChatSelect-container">
        <div className="ChatSelect-content">
          <div className="ChatSelect-content-img">
            <img src={Ilustration} alt="Escoge un chat para iniciar" />
          </div>
          <div className="Chat-Selectec-content-text">
            <h1>Mensajería en tiempo real</h1>
            <hr></hr>
            <p>
              Selecciona un contacto de tu agenda y comienza a chatear al
              instante.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatSelect
