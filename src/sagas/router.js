import { takeLatest } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

export function* saga() {
  yield takeLatest(LOCATION_CHANGE, scrollToTop)
}

export default saga
