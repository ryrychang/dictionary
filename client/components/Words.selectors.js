import { get } from 'lodash'
import { createSelector } from 'reselect'

const wordsLoading = state => get(state, 'synonyms.loading') || false
export const wordsLoadingSelector = createSelector(
  wordsLoading, loading => loading
)

const wordsData = state => get(state, 'synonyms.data.results')
export const wordsDataSelector = createSelector(
  wordsData, words => words
)
