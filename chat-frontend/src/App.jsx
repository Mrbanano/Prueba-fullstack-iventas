import React, { useEffect, useState } from 'react'
import AppRouter from './router/AppRouter'
import { AuthProvider } from './auth/AuthContext'
import { SocketProvider } from './context/SocketContext'
import './App.css'

function App() {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [User, setUser] = useState(null)

  return (
    <AuthProvider>
      <SocketProvider>
        <div className="App">
          <div className="App-container">
            <div className="App-content">
              <AppRouter />
            </div>
          </div>
        </div>
      </SocketProvider>
    </AuthProvider>
  )
}

export default App
