import React from "react";

export default class FetchApi extends React.Component {
  constructor() {
    super();
    this.state = {
      view: {}
    };
  }
  componentDidMount() {
    const apiUrl = "https://restcountries.eu/rest/v2/region/europe";
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          view: data
        });
      });
  }
  render() {
    return <p>Api data is here :- {console.log(this.state.view)}</p>;
  }
}
