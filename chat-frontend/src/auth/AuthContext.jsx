import { createContext, useCallback, useState } from 'react'
import { loginServices, verifyTokenServices } from '../services/auth'

export const AuthContext = createContext()

const initialState = {
  id: null,
  isLoading: true,
  isAuthenticated: false,
  Name: null,
  lastName: null,
  Phone: null,
  Avatar: null,
  Age: null,
  Email: null,
  Priority: null,
  Problem: null,
  Promotion: null,
  CURP: null,
  Rol: null,
  online: null
}

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState)

  const login = async (Email, Password) => {
    const { data } = await loginServices({ Email, Password })

    if (data.message) return data.message

    localStorage.setItem('token', data.token)

    const { user } = data
    setAuth({
      isLoading: false,
      isAuthenticated: true,
      id: user.id,
      Name: user.Name,
      lastName: user.lastName,
      Phone: user.Phone,
      Avatar: user.Avatar,
      Age: user.Age,
      Email: user.Email,
      Priority: user.Priority,
      Problem: user.Problem,
      Promotion: user.Promotion,
      CURP: user.CURP,
      Rol: user.Rol,
      online: user.online
    })

    return 'Se inicio correctamente sesión'
  }

  const logout = () => {
    localStorage.removeItem('token')
    setAuth({
      isLoading: false,
      isAuthenticated: false
    })
  }

  const verifyToken = useCallback(async () => {
    const token = localStorage.getItem('token')

    if (token == null || token == undefined || !token) {
      setAuth({
        isLoading: false,
        isAuthenticated: false
      })
      return false
    }

    const response = await verifyTokenServices()

    if (response.success == false) {
      setAuth({
        isLoading: false,
        isAuthenticated: false
      })
      return false
    }

    localStorage.setItem('token', response.data.token)

    const { user } = response.data
    setAuth({
      isLoading: false,
      isAuthenticated: true,
      id: user.id,
      Name: user.Name,
      lastName: user.lastName,
      Phone: user.Phone,
      Avatar: user.Avatar,
      Age: user.Age,
      Email: user.Email,
      Priority: user.Priority,
      Problem: user.Problem,
      Promotion: user.Promotion,
      CURP: user.CURP,
      Rol: user.Rol,
      online: user.online
    })

    return true
  }, [])

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
        verifyToken
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
