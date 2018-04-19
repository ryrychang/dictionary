import React from 'react'
import { connect } from 'react-redux'
import enhanceWithClickOutside from 'react-click-outside'
import { fetchDefinitions } from '../actions/actions'
import {
  definitionsLoadingSelector,
  definitionSelector
} from './Word.selectors'
import Styles from './Word.css'

class Word extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false,
      fetched: false
    }
  }

  handleClickOutside = () => {
    this.setState({ open: false })
  }

  toggle = () => {
    const { word } = this.props
    const { open } = this.state
    this.setState({
      open: !open,
      fetched: true
    })

    this.props.fetchDefinitions(word.id)
  }

  render () {
    const { word, loading, definition } = this.props

    return (
      <div className={Styles.wordWrapper}>
        <div className={this.state.open ? Styles.open : Styles.closed}>
          { loading ? 'Loading...' : definition }
        </div>
        <li onClick={this.toggle}>
          {word.id}
        </li>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: definitionsLoadingSelector(state),
  definition: definitionSelector(state)
})

const mapDispatchToProps = {
  fetchDefinitions
}

export default connect(mapStateToProps, mapDispatchToProps)(enhanceWithClickOutside(Word))
