import React from 'react'
import Card from './Card'
import characters from './characters.json'

const App = () =>
  <div className="container">
    <header className="header">
      <h3>Winter is voting</h3>
    </header>
    <section className="content">
      <div className="row">
        {characters.map(character =>
          <div className="col-sm-4" key={character.id}>
            <Card
              title={character.name}
              text={character.description}
              picture={character.picture}
            />
          </div>,
        )}
      </div>
    </section>
  </div>

export default App
