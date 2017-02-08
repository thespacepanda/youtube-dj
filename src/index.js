import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducer'

const preloadedState = {
  current: "",
  playlist: []
}

let socket = io("http://localhost:3000")
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/")

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	reducer,
	preloadedState,
	composeEnhancers(applyMiddleware(thunk, socketIoMiddleware))
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
