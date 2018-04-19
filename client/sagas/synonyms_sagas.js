import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from '../actions/actions'

const BASE = '/'

const apiClient = axios.create({
  baseURL: BASE
})

export function * synonymsWatcherSaga () {
  yield takeLatest(actions.FETCH_SYNONYMS_REQUEST, synonymsWorkerSaga)
}

function fetchSynonyms ({ word } = {}) {
  return apiClient.get(`/synonyms`, {
    params: { word }
  })
}

function * synonymsWorkerSaga (action) {
  try {
    const response = yield call(fetchSynonyms, action.payload)
    const data = response.data

    yield put({ type: actions.FETCH_SYNONYMS_SUCCESS, payload: { data } })
  } catch (error) {
    yield put({ type: actions.FETCH_SYNONYMS_FAILURE, payload: { error } })
  }
}
