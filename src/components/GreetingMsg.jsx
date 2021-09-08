import React, { Component } from "react";
import "../App.css";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";

class GreetingMsg extends Component {
  state = { timeOfDay: this.props.data };

  greet(msg) {
    if (this.state.timeOfDay.getHours() < 12) {
      return (msg = "GOOD MORNING");
    } else if (this.state.timeOfDay.getHours() < 18) {
      return (msg = "GOOD DAY");
    } else if (this.state.timeOfDay.getHours() < 24) {
      return (msg = "GOOD EVENING");
    }
  }

  dayOrNight(icon) {
    if (
      this.state.timeOfDay.getHours() <= 19 &&
      this.state.timeOfDay.getHours() > 6
    ) {
      return (icon = sun);
    }
    return (icon = moon);
  }

  render() {
    const msg = this.greet();
    const icon = this.dayOrNight();
    return (
      <>
        <div className="currently-container">
          <div className="weather-icon">
            <img src={icon} alt="icon" />
          </div>
          <div className="currently">
            <p>{msg}, IT'S CURRENTLY</p>
          </div>
        </div>
      </>
    );
  }
}

export default GreetingMsg;
