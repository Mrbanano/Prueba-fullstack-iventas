import Hero from '../../Components/Hero'
import LoginForm from '../../Components/LoginForm'
import './Login.css'
console.log(
  'Hola, hola un gusto verte por acá, si estás explorando por aquí es porque algo te encanto o algo realmente te asusto, sea lo que sea ponte en contacto y te platico de como y porque implemente ciertas cosas, me hubiera encantado pulirlo mas pero no me dio el tiempo'
)

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
