import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Form, Grid, Header, Image, Segment, Button, Popup } from 'semantic-ui-react'
import { withRouter, useHistory } from "react-router-dom"
import { useForm, Controller } from "react-hook-form"


function TimeForm() {
  const [prodTime, setProdTime] = useState('')
  const [shortBreak, setShortBreak] = useState('')
  const [longBreak, setLongBreak] = useState('')
  const [interval, setInterval] = useState('')
  const history = useHistory()

  /*handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }*/

  function handleSubmit(event) {
    event.preventDefault()
    history.push(`/timer/${prodTime}-${shortBreak}-${longBreak}-${interval}`)
  }

  return(
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 500 }}>
        <Header as='h2' textAlign='center' className="form">
          <Image src={logo}/> How do you want to work?
        </Header>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>

            <Form.Input
              fluid
              icon='time'
              type='number'
              iconPosition='left'
              name="productiveTime"
              value={prodTime}
              onChange={e => setProdTime(e.target.value)}
              placeholder="Productive Time (minutes)"
            />

            <Form.Input
              fluid
              icon='time'
              type='number'
              iconPosition='left'
              name="shortBreak"
              value={shortBreak}
              onChange={e => setShortBreak(e.target.value)}
              placeholder="Short Break (minutes)"
            />

            <Form.Input
              fluid
              icon='time'
              type='number'
              iconPosition='left'
              name="longBreak"
              value={longBreak}
              onChange={e => setLongBreak(e.target.value)}
              placeholder="Long Break (minutes)"
            />

            <Popup
              trigger={<Form.Input
                        fluid
                        icon='redo'
                        type='number'
                        iconPosition='left'
                        name="interval"
                        value={interval}
                        onChange={e => setInterval(e.target.value)}
                        placeholder="Interval"
                        />}
              content="Interval will be the amount of times you will have a short break before a long break."
              position="right center"
            />

              <Button fluid size='large' type='submit' className="btn">Submit</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default withRouter(TimeForm)
