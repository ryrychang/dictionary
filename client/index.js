import React from 'react'
import ReactDOM from 'react-dom'
import Styles from './index.css'

const Root = () => (
  <div className={Styles.container}>
    Hello World!
  </div>
)

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
)
