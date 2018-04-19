import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Words from './components/Words'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Words />
  </Provider>,
  document.querySelector('#root')
)
