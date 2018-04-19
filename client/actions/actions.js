// Definitions
export const FETCH_DEFINITIONS_REQUEST = 'FETCH_DEFINITIONS_REQUEST'
export const FETCH_DEFINITIONS_SUCCESS = 'FETCH_DEFINITIONS_SUCCESS'
export const FETCH_DEFINITIONS_FAILURE = 'FETCH_DEFINITIONS_FAILURE'

export const fetchDefinitions = word => ({
  type: FETCH_DEFINITIONS_REQUEST, payload: { word }
})

// Synonyms
export const FETCH_SYNONYMS_REQUEST = 'FETCH_SYNONYMS_REQUEST'
export const FETCH_SYNONYMS_SUCCESS = 'FETCH_SYNONYMS_SUCCESS'
export const FETCH_SYNONYMS_FAILURE = 'FETCH_SYNONYMS_FAILURE'
export const CLEAR_SYNONYMS = 'CLEAR_SYNONYMS'

export const fetchSynonyms = word => ({
  type: FETCH_SYNONYMS_REQUEST, payload: { word }
})

export const clearSynonyms = () => ({ type: CLEAR_SYNONYMS })
