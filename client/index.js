import React from 'react'
import ReactDOM from 'react-dom'
import Subscribe from './subscribe'
import Styles from './index.css'

const Root = () => (
  <div className={Styles.container}>
    <div className={Styles.content}>
      <Subscribe />
    </div>
  </div>
)

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
)
