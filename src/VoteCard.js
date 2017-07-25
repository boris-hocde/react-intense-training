import React from 'react'
import Card from './Card'

class VoteCard extends React.Component {
  state = { votes: 0 }

  handleClick = () => this.setState(state => ({ votes: state.votes + 1 }))

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
