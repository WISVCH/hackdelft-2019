import { call, put, takeLatest } from 'redux-saga/effects'
import { resize, scroll } from 'ducks/window'

import { createElementEventChannel } from 'utilities/sagas'

function* dispatchWindowActions(event) {
  switch (event) {
    case 'resize':
      yield put(resize(window.innerWidth, window.innerHeight))
      break;
    case 'scroll':
      yield put(scroll(window.scrollX, window.scrollY))
      break;
    default:
      break;
  }
}

function* saga() {
  const channel = yield call(createElementEventChannel, window, ['resize', 'scroll'])

  yield takeLatest(channel, dispatchWindowActions)
}

export default saga
