import React from 'react'
import Styles from './Welcome.css'
import Modal from './Modal'
import SubscribeModalContent from './SubscribeModalContent'

class Welcome extends React.Component {
  constructor (props) {
    super(props)

    this.state = { isSubscribeModalOpen: false }

    this.toggleSubscribeModal = this.toggleSubscribeModal.bind(this)
    this.closeSubscribeModal = this.closeSubscribeModal.bind(this)
  }

  toggleSubscribeModal () {
    const { isSubscribeModalOpen } = this.state
    this.setState({ isSubscribeModalOpen: !isSubscribeModalOpen })
  }

  closeSubscribeModal () {
    this.setState({ isSubscribeModalOpen: false })
  }

  render () {
    return (
      <div className={Styles.container}>
        <Modal isOpen={this.state.isSubscribeModalOpen}>
          <SubscribeModalContent />
        </Modal>
        <div className={Styles.content}>
          <p>SANDALBOYZ Indonesia - Coming Soon</p>
          <p>Autumn 2018</p>
          <div onClick={this.toggleSubscribeModal} className={Styles.newsletterButton}>
            Newsletter
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
