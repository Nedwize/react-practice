// Example Class Based Component

import React, { Component } from "react";

class SeasonDisplay extends Component {
  constructor(props) {
    super(props); // To make sure the Parent's Constructor function gets called, we call super()

    this.state = { latitude: 0 };

    window.navigator.geolocation.getCurrentPosition(
      (data) => {
        //   Anytime you want to update your state, you call the setState function
        console.log("Function called");
        console.log(data.coords.latitude);
        this.setState({ latitude: data.coords.latitude });
      },
      (err) => console.log(err)
    );
  }
  render() {
    return <div>Latitude: {this.state.latitude}</div>;
  }
}

export default SeasonDisplay;
