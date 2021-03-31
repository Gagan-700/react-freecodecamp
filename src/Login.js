import React from "react";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      islogged: false
    };
    this.status = this.status.bind(this);
  }
  status() {
    this.setState(prevState => {
      return {
        islogged: !prevState.islogged
      };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.status}>
          {this.state.islogged ? (
            <p>You are logged In</p>
          ) : (
            <p>You are logged out</p>
          )}
        </button>
        {console.log("is logged in:-", this.state.islogged)}
      </div>
    );
  }
}
