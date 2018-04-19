import React from 'react'

const renderWords = (words) => {
  return (
    <div>
      Hello World
    </div>
  )
}

// This is a data-driven component.
const WordsList = ({ words, loading }) => {
  if (loading) return <div>Loading...</div>
  return (
    <div>{renderWords()}</div>
  )
}

export default WordsList
