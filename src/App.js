import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import Character from './Character'

const App = () =>
  <div className="container">
    <header className="header">
      <h3>
        <Link to="/">Winter is voting</Link>
      </h3>
    </header>
    <section className="content">
      <Route exact path="/" component={Home} />
      <Route path="/characters/:id" component={Character} />
    </section>
  </div>

export default App
