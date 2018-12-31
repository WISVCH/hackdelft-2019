import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import window from './window'
import modals from './modals'

export const reducer = combineReducers({
  router,
  window,
  modals,
})

export default reducer
