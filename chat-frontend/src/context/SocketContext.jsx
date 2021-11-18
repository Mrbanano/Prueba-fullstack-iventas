import React from 'react'
import { createContext } from 'react'
import { useSocket } from '../hook/useSocket'

export const SocketContext = createContext()

export const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket('http://192.168.1.75:3005')

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  )
}
