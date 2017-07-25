import React from 'react'
import Card from './Card'

class VoteCard extends React.Component {
  state = { votes: 0 }

  render() {
    return <Card {...this.props} footer={`${this.state.votes} votes`} />
  }
}

export default VoteCard
