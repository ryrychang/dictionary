import React from 'react'
import { connect } from 'react-redux'
import WordsList from './WordsList'

class Words extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      search: ''
    }
  }

  render () {
    const { synonyms } = this.props

    return (
      <div>
        <label htmlFor='search'>Find synonyms for:</label>
        <input id='search' value={this.state.search} onChange={this.fetchWords} />
        <WordsList words={synonyms} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // words: wordsSelector(state)
})

const mapDispatchToProps = {
  // fetchWords
}

// export default connect(mapStateToProps, mapDispatchToProps)(Words)
export default Words
