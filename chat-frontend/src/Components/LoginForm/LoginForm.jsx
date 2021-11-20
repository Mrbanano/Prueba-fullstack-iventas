import { useContext, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import './LoginForm.css'

function LoginForm() {
  const { login } = useContext(AuthContext)

  const [form, setform] = useState({
    Email: '',
    Password: ''
  })

  const onChange = ({ target }) => {
    const { name, value } = target
    setform({
      ...form,
      [name]: value
    })
  }
  const validateEmail = (email) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const isOk = () => {
    const { Email, Password } = form
    return validateEmail(Email) && Password.length > 4
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const { Email, Password } = form

    if (!isOk()) {
      alert('no se pudo inicar sesion')
      return alert('Datos incorrectos')
    }
    const msg = await login(Email, Password)
  }

  return (
    <div className="LoginForm">
      <div className="LoginForm-container">
        <div className="LoginForm-content">
          <div className="Login-header">
            <h1 className="Login-title">Inicia sesión</h1>
          </div>
          <div className="Login-body">
            <form onSubmit={onSubmit}>
              <div className="input-group">
                <label className="Label" htmlFor="email">
                  Correo electrónico
                </label>
                <input
                  id="Email"
                  type="text"
                  value={form.Email}
                  name="Email"
                  required
                  onChange={onChange}
                />
              </div>
              <div className="input-group">
                <label className="Label" htmlFor="Password">
                  Contraseña
                </label>
                <input
                  id="Password"
                  type="password"
                  value={form.Password}
                  name="Password"
                  required
                  onChange={onChange}
                />
              </div>
              <button className="btn btn_login">Iniciar sesión</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
