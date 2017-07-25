import React from 'react'
import Card from './Card'

class VoteCard extends React.Component {
  state = { votes: 0 }

  incrementVotes = () => this.setState(state => ({ votes: state.votes + 1 }))
  handleClick = () => this.incrementVotes()
  handleKeyUp = event => {
    if (event.keyCode === this.props.keyCode) this.incrementVotes()
  }

  componentWillMount() {
    window.addEventListener('keyup', this.handleKeyUp)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp)
  }

  render() {
    return (
      <Card
        {...this.props}
        text={
          <div>
            <p>
              {this.props.text}
            </p>
            <button onClick={this.handleClick} className="btn btn-success">
              <span role="img" aria-label="Thumb up">
                👍🏻
              </span>
            </button>
          </div>
        }
        footer={`${this.state.votes} votes`}
      />
    )
  }
}

export default VoteCard
