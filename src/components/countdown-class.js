import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CountdownClass extends Component {
  state = {
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  };

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const timeLeftDate = this.calculateCountdown(this.props.futureDate);
      timeLeftDate ? this.setState(timeLeftDate) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <div className="component">
        <h1>Countdown</h1>
        <div className="countdown mt-4">
          <div className="col">
            <span className="value">
              {this.addLeadingZeros(countDown.days)}
            </span>
            <span className="label">
              {countDown.days === 1 ? 'Day' : 'Days'}
            </span>
          </div>
          <div className="col">
            <span className="value">
              {this.addLeadingZeros(countDown.hours)}
            </span>
            <span className="label">Hours</span>
          </div>
          <div className="col">
            <span className="value">{this.addLeadingZeros(countDown.min)}</span>
            <span className="label">Min</span>
          </div>
          <div className="col">
            <span className="value">{this.addLeadingZeros(countDown.sec)}</span>
            <span className="label">Sec</span>
          </div>
        </div>
      </div>
    );
  }
}

CountdownClass.propTypes = {
  futureDate: PropTypes.instanceOf(Date),
};

CountdownClass.defaultProps = {
  futureDate: new Date(
    Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 365
  ),
};

export default CountdownClass;
