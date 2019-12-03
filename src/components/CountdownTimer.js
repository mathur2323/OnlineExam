import React, { Component } from 'react'
import ReactCountdownClock from 'react-countdown-clock'

class CountdownTimer extends Component {

    timesUp = () => {
        this.props.calculateResult();
    }

    render() {
        return (
            <div>
                <ReactCountdownClock seconds={60}
                     color="#000"
                     alpha={0.9}
                     size={300}
                     onComplete={this.timesUp}
                      />
            </div>
        )
    }
}

export default CountdownTimer
