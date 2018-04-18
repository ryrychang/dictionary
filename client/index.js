import React from 'react'
import ReactDOM from 'react-dom'
import Words from './components/Words'

const Root = () => (
  <Words />
)

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
)
