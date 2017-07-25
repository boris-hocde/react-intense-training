import React from 'react'
import { connect } from 'react-redux'
import CharacterCard from './CharacterCard'

const Home = ({ characters }) =>
  <div className="row">
    {characters.map(character =>
      <div className="col-sm-4" key={character.id}>
        <CharacterCard character={character} />
      </div>,
    )}
  </div>

export default connect(state => ({ characters: state.characters }))(Home)
