import React, { Component } from 'react';
import "./App.css"

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
          <div className="daylight">
            <h1> {this.state.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} </h1>
          </div>
        </div>
      </>
    );
  }
}