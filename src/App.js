import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TimeForm from './components/Form/TimeForm'
import Timer from './components/Timer'

function App() {
  return(
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TimeForm}/>
          <Route
            path="/timer"
            component={Timer}
            />
        </Switch>
    </BrowserRouter>
  )
}
export default App
