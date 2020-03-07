import React from 'react'
import logo from '../assets/logo.png'
import { Form, Grid, Header, Image, Segment, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default class TimeForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      productiveTime: "",
      shortBreak: "",
      longBreak: ""
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
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' textAlign='center' className="form">
            <Image src={logo}/> Enter your times
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

              <Link to="/timer">
                <Button fluid size='large' className="btn">Submit</Button>
              </Link>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
