import './Info.css'

function Info() {
  const user = {
    Name: 'Alejandro',
    lastName: 'García',
    Phone: 5520260240,
    Avatar: 'https://i.postimg.cc/YScKVnc2/Alejandro-Garc-a.png',
    Email: 'alejandro.García@iventas.com',
    Age: 38,
    CURP: 'GAAL78371287319JCJ',
    Priotiry: 'Baja',
    Problem: 'Informes',
    Promotion: '25%',
    Roles: 'Vendor'
  }

  return (
    <div className="Info">
      <div className="Info-container">
        <div className="Info-content">
          <div className="Info-header">
            <div className="Info-header-image">
              <img src={user.Avatar} alt="Avatar de " />
            </div>
            <div className="Info-header-text">
              <p className="Info-name-user">{`${user.Name} ${user.lastName}`}</p>
              <p className="Info-phone-user">{user.Phone}</p>
              <div>
                <a className="Info-edit-user" href="#">
                  Editar datos
                </a>
              </div>
            </div>
            <div className="Info-body">
              <details open>
                <summary>
                  <strong>Datos del contacto</strong>
                  <div className="Icon">
                    <img src="/src/static/icon/close.svg" alt="close" />
                  </div>
                </summary>
                <div className="Info-data">
                  <div className="Info-group">
                    <label htmlFor="email">Correo</label>
                    <div className="Info-field">
                      <p>{user.Email}</p>
                    </div>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="Name">Nombre</label>
                    <div className="Info-field">
                      <p>{user.Name}</p>
                    </div>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="lastName">Apellido</label>
                    <div className="Info-field">
                      <p>{user.lastName}</p>
                    </div>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="Phone">Telefono</label>
                    <div className="Info-field">
                      <p>{user.Phone}</p>
                    </div>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="Prioridad">Prioridad</label>
                    <div className="Info-field">
                      <p>{user.Priotiry}</p>
                    </div>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="Problema">Problema</label>
                    <div className="Info-field">
                      <p>{user.Problem}</p>
                    </div>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="Promocion">Promocion</label>
                    <div className="Info-field">
                      <p>{user.Promotion}</p>
                    </div>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="CURP">CURP</label>
                    <div className="Info-field">
                      <p>{user.CURP}</p>
                    </div>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="Edad">Edad</label>
                    <div className="Info-field">
                      <p>{user.Age}</p>
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
