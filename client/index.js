import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './modal'
import Subscribe from './subscribe'
import Styles from './index.css'

const Root = () => (
  <div className={Styles.container}>
    <Modal isOpen>
      <Subscribe />
    </Modal>
    <div className={Styles.content}>
      Indonesia
    </div>
  </div>
)

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
)
