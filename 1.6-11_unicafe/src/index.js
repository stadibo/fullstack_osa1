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

    clickChange = (type, value) => () => {
        this.setState({ [type]: value })
    }

    average = () => {
        return Math.round(
            (this.state.good + (-1 * this.state.bad))
            / this.amount() * 100
        ) / 100
    }

    positive = () => {
        return Math.round(
            100 * (this.state.good / this.amount()) * 10
        ) / 10
    }

    amount = () => {
        return (
            this.state.good +
            this.state.neutral +
            this.state.bad
        )
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Give feedback</h1>
                    <Button
                        handleClick={this.clickChange('good', this.state.good + 1)}
                        text="Good"
                    />
                    <Button
                        handleClick={this.clickChange('neutral', this.state.neutral + 1)}
                        text="Neutral"
                    />
                    <Button
                        handleClick={this.clickChange('bad', this.state.bad + 1)}
                        text="Bad"
                    />
                </div>
                <div>
                    <h1>Statistics</h1>

                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        average={this.average()}
                        positive={this.positive()}
                        amount={this.amount()}
                    />

                </div>
            </div>
        )
    }
}

const Statistic = (props) => (
    <tbody>
        <tr>
            <td>{props.text}</td>
            <td>{props.value} {props.unit}</td>
        </tr>
    </tbody>
)

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = (props) => {
    if (props.amount !== 0)
        return (
            <table>
                <Statistic
                    value={props.good}
                    text="Good"
                />
                <Statistic
                    value={props.neutral}
                    text="Neutral"
                />
                <Statistic
                    value={props.bad}
                    text="Bad"
                />
                <Statistic
                    value={props.average}
                    text="Average"
                />
                <Statistic
                    value={props.positive}
                    text="Positive"
                    unit="%"
                />
            </table>
        )
    else
        return <p>No feedback given</p>
}

ReactDOM.render(<App />, document.getElementById('root'));
