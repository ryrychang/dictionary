import React from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import localStorage from 'store'
// Redux
import { fetchSynonyms, clearSynonyms } from '../actions/actions'
// Selectors
import {
  wordsLoadingSelector,
  wordsDataSelector
} from './Words.selectors'
// Components
import WordsList from './WordsList'
// Styles
import Styles from './Words.css'

class Words extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      search: ''
    }
  }

  onChange = (ev) => {
    this.setState({ search: ev.target.value })
  }

  searchWords = () => {
    const { search } = this.state

    if (isEmpty(search)) return

    this.props.fetchSynonyms(search)
  }

  clearStorage = () => {
    localStorage.clearAll()
    this.props.clearSynonyms()
    this.setState({ search: '' })
  }

  render () {
    const { words, loading } = this.props

    return (
      <div className={Styles.container}>
        <div className={Styles.searchContainer}>
          <label className={Styles.label} htmlFor='search'>Find synonyms for:</label>
          <input
            id='search'
            className={Styles.search}
            value={this.state.search}
            onChange={this.onChange}
            onKeyPress={(event) => {
              if (event.key === 'Enter') this.searchWords()
            }}
          />
          <div className={Styles.button} onClick={this.searchWords}>Search</div>
          <div className={Styles.button} onClick={this.clearStorage}>Clear Stored Synonyms</div>
        </div>
        <WordsList words={words} loading={loading} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: wordsLoadingSelector(state),
  words: wordsDataSelector(state)
})

const mapDispatchToProps = {
  fetchSynonyms,
  clearSynonyms
}

export default connect(mapStateToProps, mapDispatchToProps)(Words)
