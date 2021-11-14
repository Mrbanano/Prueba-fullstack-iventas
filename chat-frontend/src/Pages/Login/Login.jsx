import Hero from '../../Components/Hero'
import LoginForm from '../../Components/LoginForm'
import './Login.css'

function Login() {
  return (
    <div className="Login">
      <div className="Login-container">
        <div className="Login-content">
          <Hero />
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
