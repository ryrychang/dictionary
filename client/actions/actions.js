export const FETCH_SYNONYMS_REQUEST = 'FETCH_SYNONYMS_REQUEST'
export const FETCH_SYNONYMS_SUCCESS = 'FETCH_SYNONYMS_SUCCESS'
export const FETCH_SYNONYMS_FAILURE = 'FETCH_SYNONYMS_FAILURE'
export const CLEAR_SYNONYMS = 'CLEAR_SYNONYMS'

export const fetchSynonyms = word => ({
  type: FETCH_SYNONYMS_REQUEST, payload: { word }
})

export const clearSynonyms = () => ({ type: CLEAR_SYNONYMS })
