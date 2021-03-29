import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Home from './pages'
import './App.css'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        {/* <Route path="/login" component={Login} exact/>
        <Route path="/register" component={Register} exact/>
        <Route path="/profile-wizard" component={ProfileWizard} exact/>
        <Route path="/activity" component={Activity} exact/>
        <Route path="/gallery" component={Gallery} exact/> */}
      </Switch>
    </Router>
  )
}

export default App