import React from 'react'

// React router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A switch uses the route to pull a different component */}
        <Switch>
          <Route path="/about" component={() => <About name="Lexie" />}/>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>;
}

function About(props) {
  return <h2>About {props.name}</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
