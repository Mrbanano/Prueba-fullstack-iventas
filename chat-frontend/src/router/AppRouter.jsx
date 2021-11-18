import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import ChatPage from '../Pages/Chat'

function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/" component={ChatPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
