import { get } from 'lodash'
import { createSelector } from 'reselect'

const definitionsLoading = state => get(state, 'definitions.loading') || false
export const definitionsLoadingSelector = createSelector(
  definitionsLoading, loading => loading
)

const definition = state =>
  get(state, 'definitions.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]')
export const definitionSelector = createSelector(
  definition, def => def
)
