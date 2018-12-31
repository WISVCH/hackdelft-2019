import { all, fork } from 'redux-saga/effects'

import windowSaga from './window'
import routerSaga from './router'

export default function* root() {
  yield all([
    fork(windowSaga),
    fork(routerSaga),
  ])
}
