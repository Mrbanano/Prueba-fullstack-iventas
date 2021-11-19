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
    case types.clearUserSelected:
      return {
        ...state,
        receiver: null
      }

    case types.newMessage:
      if (
        state.receiver._id === action.payload.Receiver ||
        state.receiver._id === action.payload.Sender
      ) {
        return {
          ...state,
          messages: [...state.messages, action.payload]
        }
      } else {
        return state
      }
    case types.loadingHistory:
      return {
        ...state,
        messages: [...action.payload]
      }
    default:
      return state
  }
}
