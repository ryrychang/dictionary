import React from 'react'
import Styles from './SubscribeModalContent.css'

// Uses `React.Component` to use `ref`.
class SubscribeModalContent extends React.Component {
  render () {
    return (
      <div className={Styles.container} id='mc_embed_signup'>
        <form action='https://sandalboyz.us13.list-manage.com/subscribe/post?u=3f88b88a15f3d33d800b219a9&amp;id=266d3f083c' method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' className='validate' target='_blank' noValidate>
          <div id='mc_embed_signup_scroll'>
            <h2>Stay Informed</h2>
            <div className={`mc-field-group ${Styles.formField}`}>
              <div className={Styles.label}>
                <label htmlFor='mce-EMAIL'>Email Address*</label>
              </div>
              <input type='email' name='EMAIL' className='required email' id='mce-EMAIL' />
            </div>
            <div className={`mc-field-group ${Styles.formField}`}>
              <div className={Styles.label}>
                <label htmlFor='mce-FNAME'>First Name</label>
              </div>
              <input type='text' name='FNAME' className='' id='mce-FNAME' />
            </div>
            <div className={`mc-field-group ${Styles.formField}`}>
              <div className={Styles.label}>
                <label htmlFor='mce-LNAME'>Last Name</label>
              </div>
              <input type='text' name='LNAME' className='' id='mce-LNAME' />
            </div>
            <div id='mce-responses' className='clear'>
              <div className='response' id='mce-error-response' style={{ display: 'none' }} />
              <div className='response' id='mce-success-response' style={{ display: 'none' }} />
            </div>
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden='true'>
              <input type='text' name='b_3f88b88a15f3d33d800b219a9_266d3f083c' tabIndex='-1' value='' />
            </div>
            <div className='clear'>
              <div className={Styles.button} onClick={() => this.submitInput.click()}>
                Subscribe
              </div>
              <input
                ref={ref => { this.submitInput = ref }}
                type='submit'
                value='Subscribe'
                name='subscribe'
                id='mc-embedded-subscribe'
                className={`button ${Styles.submit}`}
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SubscribeModalContent
