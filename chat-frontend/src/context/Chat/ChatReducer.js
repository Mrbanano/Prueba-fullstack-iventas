import { types } from '../../types/types'

export const chatReducer = (state, action) => {
  switch (action.type) {
    case types.userLoaded:
      return {
        ...state,
        contacts: [...action.payload]
      }
    case types.userSelected:
      if (state.userSelected === action.payload) return state

      return {
        ...state,
        receiver: action.payload,
        messages: []
      }
    case types.newMessage:
      if (state.receiver.id === action.payload.Receiver) {
        return {
          ...state,
          messages: [...state.messages, action.payload]
        }
      } else {
        return state
      }
    default:
      return state
  }
}
