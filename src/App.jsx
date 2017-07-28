import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'August 07, 2017',
      signifier: 'DavidPuerto.com Going Live'
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to { this.state.deadline }</div>
        <div>
          <div className="Clock-days">14 days</div>
          <div className="Clock-hours">22 hours</div>
          <div className="Clock-minutes">16 minutes</div>
          <div className="Clock-seconds">23 seconds</div>
        </div>
        <div>
          <input placeholder="New date" type="text" />
          <button type="submit">Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
