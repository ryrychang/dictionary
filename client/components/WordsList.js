import React from 'react'
import { get, isEmpty } from 'lodash'

const renderSynonyms = synonyms => (
  synonyms.map(synonym => (
    <li key={synonym.id}>
      {synonym.id}
    </li>
  ))
)

const renderSenses = (senses) => {
  return senses.map(sense => (
    <div key={sense.id}>
      <h3>{get(sense, 'examples[0].text')}</h3>
      <ul>
        {renderSynonyms(get(sense, 'synonyms'))}
      </ul>
    </div>
  ))
}

const renderWords = (words) => {
  return (
    <div>
      <h2>{get(words, 'id')}</h2>
      {renderSenses(get(words, 'lexicalEntries[0].entries[0].senses'))}
    </div>
  )
}

// This is a data-driven component.
const WordsList = ({ words, loading }) => {
  if (loading) return <div>Loading...</div>

  if (isEmpty(words)) return <div>Search for a word!</div>

  return (
    <div>{renderWords(words)}</div>
  )
}

export default WordsList
