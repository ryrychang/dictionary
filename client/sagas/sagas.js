import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import {
  FETCH_SYNONYMS_REQUEST,
  FETCH_SYNONYMS_SUCCESS,
  FETCH_SYNONYMS_FAILURE
} from '../actions/actions'

const BASE = '/'

const apiClient = axios.create({
  baseURL: BASE
})

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * watcherSaga () {
  yield takeLatest(FETCH_SYNONYMS_REQUEST, workerSaga)
}

function fetchSynonyms ({ word } = {}) {
  return apiClient.get(`/synonyms`, {
    params: { word }
  })
}

// worker saga: makes the api call when watcher saga sees the action
function * workerSaga (action) {
  try {
    const response = yield call(fetchSynonyms, action.payload)
    const data = response

    // dispatch a success action to the store with the new dog
    yield put({ type: FETCH_SYNONYMS_SUCCESS, payload: { data } })
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: FETCH_SYNONYMS_FAILURE, payload: { error } })
  }
}
