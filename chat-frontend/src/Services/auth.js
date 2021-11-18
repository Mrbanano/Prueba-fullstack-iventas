import axios from 'axios'
const basesUrl = 'http://localhost:3005/chat/api/v1/Auth/'

export const loginServices = async (credentials) => {
  try {
    const { data } = await axios.post(`${basesUrl}signin`, credentials)
    return data
  } catch (error) {
    return error?.response?.data
  }
}
