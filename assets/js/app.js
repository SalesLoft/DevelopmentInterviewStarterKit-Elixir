import "../css/app.scss"

import React from "react"
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App'
import Reducers from './reducers/CombinedReducers'

import { createBrowserHistory } from 'history'

import { fetchMe } from './actions/AsyncActions'

const history = createBrowserHistory()
const middlewares = [thunkMiddleware, routerMiddleware(history)]
let store = createStore(Reducers, applyMiddleware(...middlewares))

window.store = store

// bootstrap state
store.dispatch(fetchMe());

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
