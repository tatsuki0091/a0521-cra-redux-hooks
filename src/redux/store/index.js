import { createStore } from 'redux'
import todosReducer from '../reducers/todos.reducer'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(todosReducer, devTools)