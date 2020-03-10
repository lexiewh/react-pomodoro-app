import React from 'react'
import { Grid, Header, Button } from 'semantic-ui-react'


export default class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      prod: Number(this.props.match.params.productiveTime),
      short: Number(this.props.match.params.shortBreak),
      long: Number(this.props.match.params.longBreak),
      seconds: 0,
      session: 'Pomodoro Session',
      interval: Number(this.props.match.params.interval)
    }

    this.format = this.format.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.sessionSwitch = this.sessionSwitch.bind(this)
    this.getSessionMinutes = this.getSessionMinutes.bind(this)
    this.resetSessionMinutes = this.resetSessionMinutes.bind(this)
    this.subtractInterval = this.subtractInterval.bind(this)
  }

  format(time) {
    const val = time.toString().length < 2 ? '0' + time.toString() : time
    return (val)
  }

  startTimer() {
    this.myInterval = setInterval(() => {
      const { seconds, session } = this.state
      let minutes = this.getSessionMinutes()

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if (seconds === 0) {
        if (minutes === 0) {
          this.resetSessionMinutes()
          this.sessionSwitch()
        } else {
          if (session === "Pomodoro Session") {
            this.setState({
              prod: this.state.prod - 1,
              seconds: 59
            })
          }
          if (session === "Short Break") {
            this.setState({
              short: this.state.short - 1,
              seconds: 59
            })
          }
          if (session === "Long Break") {
            this.setState({
              long: this.state.long - 1,
              seconds: 59
            })
          }
        }
      }
    }, 1000)
  }

getSessionMinutes() {
  const { session, prod, long, short } = this.state
  if (session === "Pomodoro Session") {
    return prod
  }
  if (session === "Short Break") {
    return short
  }
  if (session === "Long Break") {
    return long
  }
}

resetSessionMinutes() {
  const { session } = this.state

  if (session === "Pomodoro Session") {
    this.setState({prod: Number(this.props.match.params.productiveTime)})
  }
  if (session === "Short Break") {
    this.setState({short: Number(this.props.match.params.shortBreak)})
  }
  if (session === "Long Break") {
    this.setState({long: Number(this.props.match.params.longBreak)})
  }
}

  sessionSwitch() {
    const { session, interval } = this.state
    if (session === "Pomodoro Session" && interval > 0) {
      this.setState({ session: "Short Break"})
    }
    if (session === "Pomodoro Session" && interval === 0) {
      this.setState({
        interval: 4,
        session: "Long Break"
      })
    }
    if (session === "Short Break") {
      this.setState({ session: "Pomodoro Session"})
      this.subtractInterval()
    }
    if (session === "Long Break") {
      this.setState({ session: "Pomodoro Session" })
    }
  }

  subtractInterval() {
    if (this.state.interval > 0) {
      this.setState({interval: this.state.interval - 1})
    }
    else {
      this.setState({interval: Number(this.props.match.params.interval)})
    }
  }


  render() {
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 600 }} className='container'>
        <Header as='h1' textAlign='center' className='timer-header'>
          {this.state.session}
        </Header>

        <p>You have {this.state.interval} short breaks before a long break</p>

        <p className="minutes">{this.getSessionMinutes()}:</p>
        <p className="seconds">{this.format(this.state.seconds)}</p>

        <Button.Group size='large'>
          <Button onClick={this.startTimer}>Start</Button>
          <Button>Stop</Button>
          <Button>Reset</Button>
        </Button.Group>
        </Grid.Column>
      </Grid>
    )
  }
}
