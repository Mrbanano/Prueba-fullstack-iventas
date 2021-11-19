import axios from 'axios'
const basesUrl = 'http://192.168.1.75:3005/chat/api/v1/'

export const loginServices = async (credentials) => {
  try {
    const { data } = await axios.post(`${basesUrl}Auth/signin`, credentials)
    return data
  } catch (error) {
    return error?.response?.data
  }
}

export const verifyTokenServices = async () => {
  try {
    const token = localStorage.getItem('token') || ''
    const { data } = await axios.get(`${basesUrl}Auth/verifytoken`, {
      headers: {
        'x-access-token': `${token}`
      }
    })
    return data
  } catch (error) {
    return error?.response?.data
  }
}
export const getChatHistory = async (id) => {
  try {
    const token = localStorage.getItem('token') || ''
    const { data } = await axios.get(`${basesUrl}Message/${id}`, {
      headers: {
        'x-access-token': `${token}`
      }
    })
    return data
  } catch (error) {
    return error?.response?.data
  }
}
