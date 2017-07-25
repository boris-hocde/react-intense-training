import React from 'react'
import { connect } from 'react-redux'
import VoteCard from './VoteCard'

const keyById = { 1: 49, 2: 50, 3: 51 }

const Home = ({ match, characters }) => {
  const character = characters.find(({ id }) => String(id) === match.params.id)
  if (!character) return null
  return (
    <VoteCard
      keyCode={keyById[String(character.id)]}
      title={`#${character.id} - ${character.name}`}
      text={character.description}
      picture={character.picture}
    />
  )
}

export default connect(state => ({ characters: state.characters }))(Home)
