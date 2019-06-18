import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider, createStore, combineReducers } from './lib/redux'
import incidentReducer from './pages/CreateIncident/reducer'
import 'semantic-ui-css/semantic.min.css'

const rootReducer = combineReducers({
  incident: incidentReducer,
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
