import { useContext, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import './LoginForm.css'

function LoginForm() {
  const emailRegexp = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
  )

  const { login } = useContext(AuthContext)

  const [form, setform] = useState({
    Email: 'alejandro.García@iventas.com',
    Password: 'Contrase%a'
  })
  const onChange = ({ target }) => {
    const { name, value } = target
    setform({
      ...form,
      [name]: value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const { Email, Password } = form

    if (!emailRegexp.test(Email)) {
      return alert('El correo no es válido')
    }

    const msg = await login(Email, Password)
    console.log(msg)
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
              <button className="btn_Login">Iniciar sesión</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
