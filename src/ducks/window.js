import { createReducer } from 'utilities/ducks'

// Action types
export const RESIZE = 'window/RESIZE'
export const SCROLL = 'window/SCROLL'

// Action creators
export const resize = (width, height) => ({
  type: RESIZE,
  payload: { width, height }
})

export const scroll = (scrollLeft, scrollTop) => ({
  type: SCROLL,
  payload: { scrollLeft, scrollTop }
})

// Reducers
export const reducer = createReducer({
  width: window.innerWidth,
  height: window.innerHeight,
  scrollTop: window.scrollX,
  scrollLeft: window.scrollY,
  prevScrollTop: window.scrollY,
}, {
  [RESIZE]: (state, { width, height }) => ({
      ...state,
      width, height
    }),
  [SCROLL]: (state, { scrollLeft, scrollTop }) => ({
      ...state,
      scrollLeft, scrollTop,
      prevScrollTop: state.scrollTop === 0
        ? scrollTop
        : state.scrollTop,
    }),
})

export default reducer
