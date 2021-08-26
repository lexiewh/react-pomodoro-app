import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TimeForm from './Form/TimeForm'
import Timer from './Timer'

export default function App() {
  return(
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TimeForm}/>
          <Route
            path="/timer/:productiveTime-:shortBreak-:longBreak-:interval"
            component={Timer}
            />
          <Route component={TimeForm} />
        </Switch>
    </BrowserRouter>
  )
}
