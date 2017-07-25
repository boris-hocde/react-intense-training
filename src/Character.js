import React from 'react'
import fetchData from './fetchData'
import VoteCard from './VoteCard'

const keyById = { 1: 49, 2: 50, 3: 51 }

const Home = ({ match, data }) => {
  if (!data) return <div>Loading...</div>

  const character = data.find(({ id }) => String(id) === match.params.id)
  return (
    <VoteCard
      keyCode={keyById[String(character.id)]}
      title={`#${character.id} - ${character.name}`}
      text={character.description}
      picture={character.picture}
    />
  )
}

export default fetchData('/characters.json')(Home)
