import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_SUCCESS':
      return {
        ...state,
        characters: action.data,
        votes: action.data.reduce(
          (votes, { id }) => ({ ...votes, [id]: 0 }),
          {},
        ),
      }
    case 'LOAD_ERROR':
      return { ...state, error: action.error }
    case 'VOTE':
      return {
        ...state,
        votes: {
          ...state.votes,
          [action.id]: state.votes[action.id] + 1,
        },
      }
    default:
      return state
  }
}

const store = createStore(reducer, { characters: [], votes: {} })

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
