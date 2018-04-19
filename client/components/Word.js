import React from 'react'
import { connect } from 'react-redux'
import { fetchDefinitions } from '../actions/actions'
import Styles from './Word.css'

class Word extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false,
      fetched: false
    }
  }

  toggle = () => {
    const { word } = this.props
    const { open } = this.state
    this.setState({
      open: !open,
      fetched: true
    })

    if (!this.state.fetched) this.props.fetchDefinitions(word)
  }

  render () {
    const { word, loading, definition } = this.props

    return (
      <div className={Styles.wordWrapper}>
        <div className={this.state.open ? Styles.open : Styles.closed}>
          {
            loading
              ? 'Loading...'
              : definition
          }
        </div>
        <li onClick={this.toggle}>
          {word.id}
        </li>
      </div>
    )
  }
}

const mapStateToProps = {
  definition: 'something'
}

const mapDispatchToProps = {
  fetchDefinitions
}

export default connect(mapStateToProps, mapDispatchToProps)(Word)
