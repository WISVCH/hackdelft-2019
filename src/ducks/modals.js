import { combineReducers } from 'redux'
import { createReducer } from 'utilities/ducks'

// Action types
export const OPEN = 'modals/OPEN'
export const SET_ORIGIN = 'modals/SET_ORIGIN'

// Action creators
export const open = (name) => ({
  type: OPEN,
  payload: { name }
})

export const close = () => ({
  type: OPEN,
  payload: { name: null }
})

export const setOrigin = (name, origin) => ({
  type: SET_ORIGIN,
  payload: { name, origin }
})

// Reducers
export const current = createReducer(null, {
  [OPEN]: (state, { name }) => name,
})

export const origin = createReducer({}, {
  [SET_ORIGIN]: (state, { name, origin }) => ({
    ...state,
    [name]: origin
  }),
})

export const reducer = combineReducers({
  current, origin
})

export default reducer
