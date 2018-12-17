import React, { Component } from 'react';

import Game from './Game';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Game
                    challengeRange={[2, 9]}
                    challengeSize={6}
                    answerSize={4}
                    initialSeconds={15}
                />
            </div>
        );
    }
}

export default App;
