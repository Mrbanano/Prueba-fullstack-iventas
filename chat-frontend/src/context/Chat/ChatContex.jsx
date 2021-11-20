import { createContext, useReducer } from 'react'
import { chatReducer } from './ChatReducer'

export const ChatContext = createContext()

const initialState = {
  _id: '',
  receiver: null,
  contacts: [],
  messages: []
}

export const ChatProvider = ({ children }) => {
  const [chatState, dispatch] = useReducer(chatReducer, initialState)
  return (
    <ChatContext.Provider value={{ chatState, dispatch }}>
      {children}
    </ChatContext.Provider>
  )
}
