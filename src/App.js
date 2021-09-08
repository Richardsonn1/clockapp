import React, { Component } from 'react';
import "./App.css";
import GreetingMsg from './components/GreetingMsg';
import arrow from '../src/images/icon-arrow-up.svg';

export default class App extends Component {
  state = { time: new Date() };

  componentDidMount() {
    this.timer = setInterval(this.tick, 30000);
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
            <br />
            <h4>Ada Lovelace</h4>
          </div>
          <div className="daylight">
            <div className="daylight-container">
              <GreetingMsg data={this.state.time} />
              <h1> {this.state.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} </h1>
              <div className="location">
                <p>IN GOTHENBURG, SWE</p>
              </div>
            </div>
            <div className="more">
              <nav>
                <a href="#more" className="arrow-btn">MORE<img src={arrow} alt="icon" className="cross-img" /></a>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}