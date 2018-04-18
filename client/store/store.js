// https://github.com/redux-saga/redux-saga/issues/280
import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers/reducers'
import { watcherSaga } from '../sagas/sagas'

const sagaMiddleware = createSagaMiddleware()
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
)

sagaMiddleware.run(watcherSaga)

export default store
