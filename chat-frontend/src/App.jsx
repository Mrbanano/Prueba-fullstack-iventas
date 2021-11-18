import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import Chat from './Pages/Chat'
import AppRouter from './router/AppRouter'

function App() {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [User, setUser] = useState(null)

  return (
    <AppRouter>
      <div className="App">
        <div className="App-container">
          <div className="App-content">{User ? <Chat /> : <Login />}</div>
        </div>
      </div>
    </AppRouter>
  )
}

export default App
