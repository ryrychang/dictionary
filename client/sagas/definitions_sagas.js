import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from '../actions/actions'

const BASE = '/'

const apiClient = axios.create({
  baseURL: BASE
})

export function * definitionsWatcherSaga () {
  yield takeLatest(actions.FETCH_DEFINITIONS_REQUEST, definitionsWorkerSaga)
}

function fetchDefinitions ({ word } = {}) {
  return apiClient.get(`/definitions`, {
    params: { word }
  })
}

function * definitionsWorkerSaga (action) {
  try {
    const response = yield call(fetchDefinitions, action.payload)
    const data = response.data

    yield put({ type: actions.FETCH_DEFINITIONS_SUCCESS, payload: { data } })
  } catch (error) {
    yield put({ type: actions.FETCH_DEFINITIONS_FAILURE, payload: { error } })
  }
}
