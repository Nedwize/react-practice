// Example Class Based Component

import React, { Component } from "react";

class SeasonDisplay extends Component {
  constructor(props) {
    super(props); // To make sure the Parent's Constructor function gets called, we call super()

    this.state = { latitude: 0, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (data) => {
        //   Anytime you want to update your state, you call the setState function
        console.log("Function called");
        console.log(data.coords.latitude);
        this.setState({ latitude: data.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    if (this.state.latitude && !this.state.errorMessage) {
      return <div>Latitude: {this.state.latitude}</div>;
    }

    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && !this.state.latitude) {
      return <div>Loading!</div>;
    }
  }
}

export default SeasonDisplay;
