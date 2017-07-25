import React from 'react'
import VoteCard from './VoteCard'
import characters from './characters.json'

const keyById = { 1: 49, 2: 50, 3: 51 }

const Home = ({ match }) => {
  const character = characters.find(({ id }) => String(id) === match.params.id)
  return (
    <VoteCard
      keyCode={keyById[String(character.id)]}
      title={`#${character.id} - ${character.name}`}
      text={character.description}
      picture={character.picture}
    />
  )
}

export default Home
