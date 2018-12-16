import React, { Component } from 'react';

class Number extends Component {
    render() {
        const randomNumberBetween = (min, max) =>
            Math.floor(Math.random() * (max - min + 1)) + min;
        return <div className="number">{this.props.value}</div>;
    }
}

export default Number;
