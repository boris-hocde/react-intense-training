import React from 'react'
import { connect } from 'react-redux'

class DataLoader extends React.Component {
  componentWillMount() {
    fetch('/characters.json')
      .then(res => res.json())
      .then(this.props.onLoadSuccess)
      .then(this.props.onLoadError)
  }

  render() {
    return null
  }
}

export default connect(null, dispatch => ({
  onLoadSuccess(data) {
    dispatch({ type: 'LOAD_SUCCESS', data })
  },
  onLoadError(error) {
    dispatch({ type: 'LOAD_ERROR', error })
  },
}))(DataLoader)
