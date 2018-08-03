import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    clickGood = () => {
        this.setState({ good: this.state.good + 1 })
    }

    clickNeutral = () => {
        this.setState({ neutral: this.state.neutral + 1 })
    }

    clickBad = () => {
        this.setState({ bad: this.state.bad + 1 })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Give feedback</h1>
                    <Button
                        handleClick={this.clickGood}
                        text="Good"
                    />
                    <Button
                        handleClick={this.clickNeutral}
                        text="Neutral"
                    />
                    <Button
                        handleClick={this.clickBad}
                        text="Bad"
                    />
                </div>

                <div>
                    <h1>Statistics</h1>
                    <Display
                        value={this.state.good}
                        text="Good"
                    />
                    <Display
                        value={this.state.neutral}
                        text="Neutral"
                    />
                    <Display
                        value={this.state.bad}
                        text="Bad"
                    />
                </div>
            </div>
        )
    }
}

const Display = ({ value, text }) => (
    <div>
        <p>{text} {value}</p>
    </div>
)

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

ReactDOM.render(<App />, document.getElementById('root'));
