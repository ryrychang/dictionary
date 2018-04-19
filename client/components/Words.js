import React from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
// Redux
import { fetchSynonyms } from '../actions/actions'
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

  render () {
    const { words, loading } = this.props

    return (
      <div className={Styles.container}>
        <label htmlFor='search'>Find synonyms for:</label>
        <input
          id='search'
          value={this.state.search}
          onChange={this.onChange}
          onKeyPress={(event) => {
            if (event.key === 'Enter') this.searchWords()
          }}
        />
        <button htmlFor='search' onClick={this.searchWords}>Search</button>
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
  fetchSynonyms
}

export default connect(mapStateToProps, mapDispatchToProps)(Words)
