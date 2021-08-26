import React from 'react'
import logo from '../../assets/logo.png'
import { Form, Grid, Header, Image, Segment, Button, Popup, Label, Input } from 'semantic-ui-react'
import { withRouter, useHistory } from "react-router-dom"
import useForm from './useForm'
import validate from './FormRules'


function TimeForm() {
  const history = useHistory()
  const {
    values,
    handleChange,
    handleSubmit,
    errors
  } = useForm(submit, validate)

  function submit() {
    sessionStorage.setItem("times", JSON.stringify(values))
    console.log(JSON.parse(sessionStorage.getItem('times')).prodTime)
    history.push(`/timer`)
  }

  return(
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 500 }}>
        <Header as='h2' textAlign='center' className="form">
          <Image src={logo}/> How do you want to work?
        </Header>
        <Form onSubmit={handleSubmit}>
          <Segment stacked>

            <Form.Field>
              <Input
                fluid
                icon='time'
                type='number'
                iconPosition='left'
                placeholder="Productive Time (minutes)"
                name='prodTime'
                value={values.prodTime || ''}
                onChange={handleChange}
              />
              {errors.prodTime && (
                <Label pointing prompt>{errors.prodTime}</Label>
              )}
            </Form.Field>

            <Form.Field>
              <Input
                fluid
                icon='time'
                type='number'
                iconPosition='left'
                name="shortBreak"
                value={values.shortBreak || ''}
                onChange={handleChange}
                placeholder="Short Break (minutes)"
              />
              {errors.shortBreak && (
                <Label pointing prompt>{errors.shortBreak}</Label>
              )}
            </Form.Field>

            <Form.Field>
              <Form.Input
                fluid
                icon='time'
                type='number'
                iconPosition='left'
                name="longBreak"
                value={values.longBreak || ''}
                onChange={handleChange}
                placeholder="Long Break (minutes)"
              />
              {errors.longBreak && (
                <Label pointing prompt>{errors.longBreak}</Label>
              )}
            </Form.Field>

            <Popup
              trigger={
                <Form.Field>
                  <Input
                    fluid
                    icon='redo'
                    type='number'
                    iconPosition='left'
                    name="interval"
                    value={values.interval || ''}
                    onChange={handleChange}
                    placeholder="Interval"
                  />
                  {errors.interval && (
                    <Label pointing prompt>{errors.interval}</Label>
                  )}
                </Form.Field>
              }
              content="Interval will be the amount of times you will have a short break before a long break."
              position="right center"
            />

            <Button fluid size='large' type='submit' className="btn">
              Submit
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default withRouter(TimeForm)
