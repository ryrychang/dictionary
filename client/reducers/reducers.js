export const FETCH_SYNONYMS_REQUEST = 'FETCH_SYNONYMS_REQUEST'
export const FETCH_SYNONYMS_SUCCESS = 'FETCH_SYNONYMS_SUCCESS'
export const FETCH_SYNONYMS_FAILURE = 'FETCH_SYNONYMS_FAILURE'

const initialState = {}

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_SYNONYMS_REQUEST:
      return {
        ...state,
        synonyms: {
          loading: true,
          data: undefined,
          error: undefined
        }
      }
    case FETCH_SYNONYMS_SUCCESS:
      return {
        ...state,
        synonyms: {
          loading: false,
          data: payload.data,
          error: undefined
        }
      }
    case FETCH_SYNONYMS_FAILURE:
      return {
        ...state,
        synonyms: {
          loading: false,
          data: undefined,
          error: payload.error
        }
      }
    default:
      break
  }
}

export default reducer
