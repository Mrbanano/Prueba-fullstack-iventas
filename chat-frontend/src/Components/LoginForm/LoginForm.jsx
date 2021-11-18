import { useContext } from 'react'
import './LoginForm.css'

function LoginForm() {
  //const data = useContext(LoginContext)
  return (
    <div className="LoginForm">
      <div className="LoginForm-container">
        <div className="LoginForm-content">
          <div className="Login-header">
            <h1 className="Login-title">Inicia sesión</h1>
          </div>
          <div className="Login-body">
            <form>
              <div className="input-group">
                <label className="Label" htmlFor="email">
                  Correo electrónico
                </label>
                <input
                  id="Email"
                  type="text"
                  value=""
                  name="Email"
                  required
                  onChange={({ target }) => setEmail(target.value)}
                />
              </div>
              <div className="input-group">
                <label className="Label" htmlFor="email">
                  Correo electrónico
                </label>
                <input
                  id="Password"
                  type="password"
                  value=""
                  name="Password"
                  required
                  onChange={({ target }) => setPassword(target.value)}
                />
              </div>
              <button className="btn_Login">Iniciar sesión</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
