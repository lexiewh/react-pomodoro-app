import React from 'react'
import { Grid, Header, Button } from 'semantic-ui-react'


export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prodMinutes: Number(this.props.match.params.productiveTime),
      shortMinutes: Number(this.props.match.params.shortBreak),
      longMinutes: Number(this.props.match.params.longBreak),
      seconds: 59,
      session: 'Pomodoro'
    }

    this.countDown = this.countDown.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.secondsToTime = this.secondsToTime.bind(this)
  }

  handleChange(event) {
    this.setState({
      prodMinutes: event.targetvalue
    })
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  startTimer() {
    console.log(setInterval(this.countDown, 1000))
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }


  render() {
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 600 }} className='container'>
        <Header as='h1' textAlign='center' className='timer-header'>
          {this.state.session}
        </Header>
        <p className="minutes" handleChange={this.handleChange}>
          {this.state.prodMinutes + 1}:
        </p>
        <p className="seconds" handleChange={this.handleChange}>
          {this.state.seconds}
        </p>
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
