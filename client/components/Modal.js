import React from 'react'
import ReactModal from 'react-modal'
import Styles from './modal.css'

const Modal = ({ children, ...reactModalProps }) => (
  <ReactModal
    className={Styles.modal}
    overlayClassName={Styles.overlay}
    ariaHideApp={false}
    {...reactModalProps}
  >
    {children}
  </ReactModal>
)

export default Modal
