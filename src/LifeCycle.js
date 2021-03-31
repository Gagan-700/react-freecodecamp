import React from "react";
import Conditional from "./Conditional";

export default class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      islogged: true
    };
  }
  componentDidMount() {
    // if u want to change the state use setState().
    setTimeout(() => {
      this.setState({
        islogged: false
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        <Conditional islogged={this.state.islogged} />
        {console.log("render")}
      </div>
    );
  }
}
