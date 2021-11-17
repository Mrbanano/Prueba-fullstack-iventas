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
    Promotion:"25%",
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
              <p>{`${user.Name} ${user.lastName}`}</p>
              <p>{user.Phone}</p>
              <p>
                <a href="#">Editar datos</a>
              </p>
            </div>
            <div className="Info-body">
              <details open>
                <summary>
                  <strong>Datos del contacto</strong>
                </summary>
                <div className="Info-data">
                  <div className="Info-group">
                    <label htmlFor="email">Correo</label>
                    <p> {user.Name}</p>
                  </div>
                  <div className="Info-group">
                    <label htmlFor="Prioridad">Prioridad</label>
                    <input type="text" id="Prioridad" placeholder={user.Priotiry} disabled />
                  </div>
                  <div className="Info-group">
                    <label htmlFor="Problema">Problema</label>
                    <input type="text" id="Problema" placeholder={user.Problem} disabled />
                  </div>
                  <div className="Info-group">
                    <label htmlFor="Promocion">Promocion</label>
                    <input type="text" id="Promocion" placeholder={user.Promotion} disabled />
                  </div>
                  <div className="Info-group">
                    <label htmlFor="CURP">CURP</label>
                    <input type="text" id="CURP" placeholder={user.CURP} disabled />
                  </div>
                  <div className="Info-group">
                    <label htmlFor="Edad">Edad</label>
                    <input type="text" id="Edad" placeholder={user.Age} disabled />
                  </div>
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
