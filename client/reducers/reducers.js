import localStorage from 'store'
import {
  FETCH_SYNONYMS_REQUEST,
  FETCH_SYNONYMS_SUCCESS,
  FETCH_SYNONYMS_FAILURE,
  CLEAR_SYNONYMS,
  FETCH_DEFINITIONS_REQUEST,
  FETCH_DEFINITIONS_SUCCESS,
  FETCH_DEFINITIONS_FAILURE
} from '../actions/actions'

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
      localStorage.set('synonyms', payload.data)
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
    case CLEAR_SYNONYMS:
      return {
        synonyms: undefined
      }
    case FETCH_DEFINITIONS_REQUEST:
      return {
        ...state,
        definitions: {
          loading: true,
          data: undefined,
          error: undefined
        }
      }
    case FETCH_DEFINITIONS_SUCCESS:
      return {
        ...state,
        definitions: {
          loading: false,
          data: payload.data,
          error: undefined
        }
      }
    case FETCH_DEFINITIONS_FAILURE:
      return {
        ...state,
        definitions: {
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
