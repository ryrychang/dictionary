import { get } from 'lodash'
import { createSelector } from 'reselect'
import localStorage from 'store'

const wordsLoading = state => get(state, 'synonyms.loading') || false
export const wordsLoadingSelector = createSelector(
  wordsLoading, loading => loading
)

const wordsData = state => (
  get(localStorage.get('synonyms'), 'results[0]') || get(state, 'synonyms.data.results[0]')
)

export const wordsDataSelector = createSelector(
  wordsData, words => words
)
