import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Card from './Card'

const keyById = { 1: 49, 2: 50, 3: 51 }

class CharacterCard extends React.Component {
  handleClick = () => this.props.onVote()
  handleKeyUp = event => {
    if (event.keyCode === keyById[String(this.props.character.id)])
      this.props.onVote()
  }

  componentWillMount() {
    window.addEventListener('keyup', this.handleKeyUp)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp)
  }

  render() {
    const { character } = this.props

    return (
      <Card
        title={
          <Link to={`/characters/${character.id}`}>
            {character.id} - {character.name}
          </Link>
        }
        picture={character.picture}
        text={
          <div>
            <p>
              {character.description}
            </p>
            <button onClick={this.handleClick} className="btn btn-success">
              <span role="img" aria-label="Thumb up">
                👍🏻
              </span>
            </button>
          </div>
        }
        footer={`${this.props.votes} votes`}
      />
    )
  }
}

export default connect(
  (state, { character }) => ({
    votes: state.votes[character.id],
  }),
  (dispatch, { character }) => ({
    onVote() {
      dispatch({ type: 'VOTE', id: character.id })
    },
  }),
)(CharacterCard)
