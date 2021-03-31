import React from "react";

export default class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      age: "",
      area: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit() {
    console.log(this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:-</label>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          onChange={this.handleChange}
        />
        <br /> <br />
        <label>Age:-</label>
        <input
          type="text"
          value={this.state.age}
          name="age"
          onChange={this.handleChange}
        />
        <label>write something</label>
        <textarea
          name="area"
          value={this.state.area}
          onChange={this.handleChange}
        />
        <br />
        <button>Submit</button>
        <p>{this.state.area}</p>
      </form>
    );
  }
}