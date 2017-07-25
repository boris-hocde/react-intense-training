import React from 'react'

const fetchData = url => Component =>
  class DataLoader extends React.Component {
    state = { data: null, error: null }

    componentWillMount() {
      fetch(url)
        .then(res => res.json())
        .then(data => this.setState({ data }))
        .catch(error => this.setState({ error }))
    }

    render() {
      return (
        <Component
          {...this.props}
          data={this.state.data}
          error={this.state.error}
        />
      )
    }
  }

export default fetchData
