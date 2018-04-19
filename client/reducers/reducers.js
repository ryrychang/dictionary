import localStorage from 'store'
import {
  FETCH_SYNONYMS_REQUEST,
  FETCH_SYNONYMS_SUCCESS,
  FETCH_SYNONYMS_FAILURE,
  CLEAR_SYNONYMS
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
    default:
      break
  }
}

export default reducer
