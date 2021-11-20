import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../auth/AuthContext'
import Login from '../Pages/Login'
import ChatPage from '../Pages/Chat'
import Loading from '../Pages/Loading'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'

function AppRouter() {
  const { auth, verifyToken } = useContext(AuthContext)

  useEffect(() => {
    verifyToken()
  }, [verifyToken])

  if (auth.isLoading) {
    return <Loading />
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes
            isAuthenticated={auth.isAuthenticated}
            path="/login"
            component={Login}
          />
          <PrivateRoutes
            isAuthenticated={auth.isAuthenticated}
            path="/"
            component={ChatPage}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
