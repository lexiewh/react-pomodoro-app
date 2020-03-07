import React from 'react'


export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prod: this.props.match.params.productiveTime,
      short: this.props.match.params.shortBreak,
      long: this.props.match.params.longBreak
    }
  }


  render() {
    return(
      <h1>Hi {this.state.prod}</h1>
    )
  }
}
