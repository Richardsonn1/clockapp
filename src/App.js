import React, { Component } from 'react';
import "./App.css";
import sun from '../src/images/icon-sun.svg';

export default class App extends Component {
  state = { time: new Date() };

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState({ time: new Date() });
  };

  render() {
    return (
      <>
        <div className="main">
          <div className="quote">
            <p>"The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value."</p>
            <h4>Ada Lovelace</h4>
          </div>
          <div className="daylight">
            <div className="currently-container">
              <img src={sun} alt="icon" />
              <p>GOOD MORNING, IT'S CURRENTLY</p>
            </div>
            <h1> {this.state.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} </h1>
            <p className="location">IN GOTHENBURG, SWE</p>
          </div>
        </div>
      </>
    );
  }
}