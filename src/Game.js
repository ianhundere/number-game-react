import React, { Component } from 'react';

import Number from './Number';

const randomNumberBetween = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

class Game extends Component {
    challengeNumbers = Array.from({ length: this.props.challengeSize }).map(
        () => randomNumberBetween(...this.props.challengeRange)
    );
    target = (this.challengeNumbers, this.props.answerSize);

    render() {
        return (
            <div className="game">
                <div className="help">
                    Pick {this.props.answerSize} numbers that sum to the target
                    in {this.props.initialSeconds} seconds
                </div>
                <div className="target">{this.target}</div>
                <div className="challenge-numbers">
                    {this.challengeNumbers.map((value, index) => (
                        <Number key={index} value={value} />
                    ))}
                </div>
                <div className="footer">
                    <div className="timer-value">15</div>
                    {this.props.initialSeconds}
                    <button>Start</button>
                </div>
            </div>
        );
    }
}

// ReactDOM.render(<Game />, mountNode);
export default Game;
