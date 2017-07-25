import React from 'react'
import VoteCard from './VoteCard'
import characters from './characters.json'

const keyById = { 1: 49, 2: 50, 3: 51 }

const App = () =>
  <div className="container">
    <header className="header">
      <h3>Winter is voting</h3>
    </header>
    <section className="content">
      <div className="row">
        {characters.map(character =>
          <div className="col-sm-4" key={character.id}>
            <VoteCard
              keyCode={keyById[String(character.id)]}
              title={`#${character.id} - ${character.name}`}
              text={character.description}
              picture={character.picture}
            />
          </div>,
        )}
      </div>
    </section>
  </div>

export default App
