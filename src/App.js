import React from 'react'
import { Route, Link } from 'react-router-dom'
import DataLoader from './DataLoader'
import Home from './Home'
import Character from './Character'

const App = () =>
  <div className="container">
    <DataLoader />
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
