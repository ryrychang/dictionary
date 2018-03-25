import React from 'react'
import Styles from './Welcome.css'
import Modal from './Modal'
import SubscribeModalContent from './SubscribeModalContent'
import SandalboyzLogo from '../images/SandalboyzLogo.png'
import LineIcon from '../images/LineIcon.svg'
import WhatsAppIcon from '../images/WhatsAppIcon.svg'

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
        <Modal isOpen={this.state.isSubscribeModalOpen} onRequestClose={this.closeSubscribeModal}>
          <SubscribeModalContent />
        </Modal>
        <div className={Styles.content}>
          <div className={Styles.logoHeader}>
            <img src={SandalboyzLogo} className={Styles.logo} />
            <img src={SandalboyzLogo} className={Styles.logo} />
            <img src={SandalboyzLogo} className={Styles.logo} />
          </div>
          <h2 className={Styles.header}>SANDALBOYZ Indonesia - Coming Soon</h2>
          <h2 className={Styles.header}>Autumn 2018</h2>
          <div className={Styles.socialContainer}>
            <div className={Styles.socialRow}>
              <span className={Styles.social}>WhatsApp</span>: +62 852 0280 4698
              <a href='https://api.whatsapp.com/send?phone=6285202804698&text=Hello%21'>
                <WhatsAppIcon className={Styles.socialIcon} />
              </a>
            </div>
            <div className={Styles.socialRow}>
              <span className={Styles.social}>LINE</span>: SANDALBOYZ
              <a href='line://oaMessage/@sandalboyz/?Hello%21'>
                <LineIcon className={Styles.socialIcon} />
              </a>
            </div>
          </div>
          <div className={Styles.newsletterButton}>
            <span onClick={this.toggleSubscribeModal}>Newsletter</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
