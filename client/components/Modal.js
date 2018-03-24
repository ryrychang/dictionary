import React from 'react'
import ReactModal from 'react-modal'
import Styles from './modal.css'

const Modal = ({ children, ...reactModalProps }) => (
  <ReactModal
    className={Styles.modal}
    overlayClassName={Styles.overlay}
    {...reactModalProps}
  >
    {children}
  </ReactModal>
)

export default Modal
