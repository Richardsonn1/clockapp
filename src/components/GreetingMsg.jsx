import React, { Component } from "react";
import "../App.css";
import sun from "../images/icon-sun.svg";

class GreetingMsg extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="currently-container">
          <div className="weather-icon">
            <img src={sun} alt="icon" />
          </div>
          <div className="currently">
            <p>GOOD MORNING, IT'S CURRENTLY</p>
          </div>
        </div>
      </>
    );
  }
}

export default GreetingMsg;
