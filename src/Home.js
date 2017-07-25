import React from 'react'
import { Link } from 'react-router-dom'
import VoteCard from './VoteCard'
import characters from './characters.json'

const keyById = { 1: 49, 2: 50, 3: 51 }

const Home = () =>
  <div className="row">
    {characters.map(character =>
      <div className="col-sm-4" key={character.id}>
        <VoteCard
          keyCode={keyById[String(character.id)]}
          title={
            <Link to={`/characters/${character.id}`}>
              {character.id} - {character.name}
            </Link>
          }
          text={character.description}
          picture={character.picture}
        />
      </div>,
    )}
  </div>

export default Home
