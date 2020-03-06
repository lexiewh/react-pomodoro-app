import React from 'react'
import '../stylesheets/main.css'


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
      <main>
        <form>
            <input
              name="productiveTime"
              value={this.state.productiveTime}
              onChange={this.handleChange}
              placeholder="Productive Time"
            /><br />

            <input
              name="shortBreak"
              value={this.state.shortBreak}
              onChange={this.handleChange}
              placeholder="Short Break"
            /><br />

            <input
              name="longBreak"
              value={this.state.longBreak}
              onChange={this.handleChange}
              placeholder="Long Break"
            /><br />

        </form>

        <hr />
        <h3>Entered Information:</h3>
        <p>Productive time: {this.state.productiveTime}</p>
        <p>Short break: {this.state.shortBreak}</p>
        <p>Long break: {this.state.longBreak}</p>
      </main>
    )
  }
}
