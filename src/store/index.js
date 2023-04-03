import { createStore, applyMiddleware } from 'redux'
import toDoReducer from './reducer/todoREducer'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(toDoReducer, applyMiddleware(thunk, createLogger({ collapsed: true })))

export default store