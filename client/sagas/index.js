import { all, call } from 'redux-saga/effects'
import { synonymsWatcherSaga } from './synonyms_sagas'
import { definitionsWatcherSaga } from './definitions_sagas'

export default function * rootSaga () {
  yield all([
    call(synonymsWatcherSaga),
    call(definitionsWatcherSaga)
  ])
}
