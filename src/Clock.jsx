import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    console.log('this.props', this.props);
  }
  render() {
    return (
      <div>
        <div className="Clock-days">14 days</div>
        <div className="Clock-hours">22 hours</div>
        <div className="Clock-minutes">16 minutes</div>
        <div className="Clock-seconds">23 seconds</div>
      </div>
    )
  }
}

export default Clock;
