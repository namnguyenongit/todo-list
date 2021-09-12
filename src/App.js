import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Layout/Home/Home'
import NavBar from './Layout/NavBar/NavBar'
import CreateTask from './Layout/CreateTask/CreateTask'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="App-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateTask />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
