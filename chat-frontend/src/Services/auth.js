import axios from 'axios'
const basesUrl = 'http://192.168.1.75:3005/chat/api/v1/Auth/'

export const loginServices = async (credentials) => {
  try {
    const { data } = await axios.post(`${basesUrl}signin`, credentials)
    return data
  } catch (error) {
    return error?.response?.data
  }
}

export const verifyTokenServices = async () => {
  try {
    const token = localStorage.getItem('token') || ''
    const { data } = await axios.get(`${basesUrl}verifytoken`, {
      headers: {
        'x-access-token': `${token}`
      }
    })
    return data
  } catch (error) {
    return error?.response?.data
  }
}
