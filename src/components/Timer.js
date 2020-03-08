import React from 'react'
import { Grid, Header, Button } from 'semantic-ui-react'


export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prodMinutes: this.props.match.params.productiveTime,
      prodSeconds: '00',
      shortMinutes: this.props.match.params.shortBreak,
      shortSeconds: '00',
      longMinutes: this.props.match.params.longBreak,
      longSeconds: '00',
      session: 'Pomodoro'
    }
  }


  render() {
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 600 }} className='container'>
        <Header as='h1' textAlign='center' className='timer-header'>
          {this.state.session}
        </Header>
        <h1 className="time">{this.state.prodMinutes}:{this.state.prodSeconds}</h1>
        <Button.Group size='large'>
          <Button>Start</Button>
          <Button>Stop</Button>
          <Button>Reset</Button>
        </Button.Group>
        </Grid.Column>
      </Grid>
    )
  }
}
