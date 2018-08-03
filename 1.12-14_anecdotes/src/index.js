import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0
            }
        }
    }

    randomize = (max) => () => {
        let rnd = Math.floor(Math.random() * max)
        this.setState({ selected: rnd })
    }

    vote = (index) => () => {
        let copy = this.state.votes
        copy[index] += 1
        this.setState({ votes: copy })
    }

    highestRated = () => {

    }

    render() {
        return (
            <div>
                <div>
                    <Display
                        text={this.props.anecdotes[this.state.selected]}
                        voted={this.state.votes[this.state.selected]}
                    />
                    <Button
                        handleClick={this.vote(this.state.selected)}
                        text="Vote"
                    />
                    <Button
                        handleClick={this.randomize(this.props.anecdotes.length)}
                        text="Next anecdote"
                    />
                </div>
                {/* <div>
                    <h3>anecdote with most votes:</h3>
                    <Display
                        text={this.props.anecdotes[this.state.top]}
                        voted={this.state.votes[this.state.top]}
                    />
                </div> */}
            </div>
        )
    }
}

const Display = ({ text, voted }) => (
    <p>{text} <br></br>has {voted} votes</p>
)

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)