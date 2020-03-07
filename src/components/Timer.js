import React from 'react'
import { useParams } from 'react-router-dom'

function Timer() {
  const { productiveTime, shortBreak, longBreak } = useParams()
  return(
    <h1>Hi {productiveTime} {shortBreak} {longBreak}</h1>
  )
}

export default Timer
