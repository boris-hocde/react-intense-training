import React from 'react'
import { connect } from 'react-redux'
import CharacterCard from './CharacterCard'

const Home = ({ match, characters }) => {
  const character = characters.find(({ id }) => String(id) === match.params.id)
  if (!character) return null
  return <CharacterCard character={character} />
}

export default connect(state => ({ characters: state.characters }))(Home)
