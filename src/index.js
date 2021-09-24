import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import middleware from './middleware'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from './reducers'
import App from './components/App'


const store = createStore(reducer,middleware)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

