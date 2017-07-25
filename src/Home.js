import React from 'react'
import fetchData from './fetchData'
import { Link } from 'react-router-dom'
import VoteCard from './VoteCard'

const keyById = { 1: 49, 2: 50, 3: 51 }

const Home = ({ data }) =>
  <div className="row">
    {data
      ? data.map(character =>
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
        )
      : 'Loading...'}
  </div>

export default fetchData('/characters.json')(Home)
