import React from 'react'
import ReactDOM from 'react-dom'
import Welcome from './components/Welcome'

const Root = () => (
  <Welcome />
)

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
)
