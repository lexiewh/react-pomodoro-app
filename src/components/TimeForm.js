import React from 'react'
import logo from '../assets/logo.png'
import { Form, Grid, Header, Image, Segment, Button, Popup } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default class TimeForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      productiveTime: "",
      shortBreak: "",
      longBreak: "",
      interval: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  render() {
    return(
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 500 }}>
          <Header as='h2' textAlign='center' className="form">
            <Image src={logo}/> How do you want to work?
          </Header>
          <Form size='large'>
            <Segment stacked>

              <Form.Input
                fluid
                icon='time'
                iconPosition='left'
                name="productiveTime"
                value={this.state.productiveTime}
                onChange={this.handleChange}
                placeholder="Productive Time"
              />

              <Form.Input
                fluid
                icon='time'
                iconPosition='left'
                name="shortBreak"
                value={this.state.shortBreak}
                onChange={this.handleChange}
                placeholder="Short Break"
              />

              <Form.Input
                fluid
                icon='time'
                iconPosition='left'
                name="longBreak"
                value={this.state.longBreak}
                onChange={this.handleChange}
                placeholder="Long Break"
              />

              <Popup
                trigger={<Form.Input
                          fluid
                          icon='redo'
                          iconPosition='left'
                          name="interval"
                          value={this.state.interval}
                          onChange={this.handleChange}
                          placeholder="Interval"
                          />}
                content="Interval will be the amount of times you will have a short break before a long break."
                position="right center"
              />

              <Link
                to={`/timer/${this.state.productiveTime}-${this.state.shortBreak}-${this.state.longBreak}-${this.state.interval}`}
              >
                <Button fluid size='large' className="btn">Submit</Button>
              </Link>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
