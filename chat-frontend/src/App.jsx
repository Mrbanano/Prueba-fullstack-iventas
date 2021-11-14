import React, { useEffect, useState } from 'react'
import './App.css'
import { loginServices } from './Services/auth'
import Login from './Pages/Login'
import Chat from './Pages/Chat'

const LoginContext = React.createContext()

function App() {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [User, setUser] = useState(null)

  return (
    <LoginContext.Provider
      value={{ Email, Password, setEmail, setPassword, User, setUser }}
    >
      <div className="App">
        <div className="App-container">
          <div className="App-content">{User ? <Chat /> : <Login />}</div>
        </div>
      </div>
    </LoginContext.Provider>
  )
}

export default App
