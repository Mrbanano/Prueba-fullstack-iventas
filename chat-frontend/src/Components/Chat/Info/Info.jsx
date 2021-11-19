import { useContext, useState } from 'react'
import { ChatContext } from '../../../context/Chat/ChatContex'
import './Info.css'

function Info({ showInfo, setshowInfo, InfoVisible }) {
  const { chatState } = useContext(ChatContext)
  const [Show, setShow] = useState(true)
  const {
    Name,
    lastName,
    Phone,
    Avatar,
    Email,
    Age,
    CURP,
    Priotiry,
    Problem,
    Promotion
  } = chatState.receiver

  const ShowInfo = () => {
    setShow(!Show)
  }

  const ShowInfoPage = () => {
    setshowInfo(!showInfo)
  }

  return (
    <div className={`Info ${InfoVisible} `}>
      <div className="Info-container">
        <div className="Info-back-header">
          <div className="header-modal" onClick={ShowInfoPage}>
            <img src="/src/static/icon/arrow_back.svg" alt="icono para atras" />
          </div>
        </div>
        <div className="Info-content">
          <div className="Info-header">
            <div className="Info-header-image">
              <img src={Avatar} alt={`Avatar de ${Name} ${lastName}`} />
            </div>
            <div className="Info-header-text">
              <p className="Info-name-user">{`${Name} ${lastName}`}</p>
              <p className="Info-phone-user">{Phone}</p>
              <div>
                <a className="Info-edit-user" href="#">
                  Editar datos
                </a>
              </div>
            </div>
            <div className="Info-body">
              <details open>
                <summary onClick={ShowInfo}>
                  <strong>Datos del contacto</strong>
                  <div>
                    <img
                      className={Show ? '' : 'flip'}
                      id="show"
                      src="/src/static/icon/close.svg"
                      alt="close"
                    />
                  </div>
                </summary>
                <div className="Info-data">
                  <div className="Info-group">
                    <label htmlFor="email">Correo</label>
                    <div className="Info-field">
                      <p>{Email}</p>
                    </div>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="Name">Nombre</label>
                    <div className="Info-field">
                      <p>{Name}</p>
                    </div>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="lastName">Apellido</label>
                    <div className="Info-field">
                      <p>{lastName}</p>
                    </div>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="Phone">Telefono</label>
                    <div className="Info-field">
                      <p>{Phone}</p>
                    </div>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="Prioridad">Prioridad</label>
                    <div className="Info-field">
                      <p>{Priotiry}</p>
                    </div>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="Problema">Problema</label>
                    <div className="Info-field">
                      <p>{Problem}</p>
                    </div>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="Promocion">Promocion</label>
                    <div className="Info-field">
                      <p>{Promotion}</p>
                    </div>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="CURP">CURP</label>
                    <div className="Info-field">
                      <p>{CURP}</p>
                    </div>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="Edad">Edad</label>
                    <div className="Info-field">
                      <p>{Age}</p>
                    </div>
                  </div>
                  <div className="space"></div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
