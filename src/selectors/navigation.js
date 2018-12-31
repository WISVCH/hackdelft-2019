import { createSelector } from 'reselect'

export const getWindow = (state) => state.window
export const getPathname = (state) => state.router.location.pathname

export const isTransparent = createSelector(
  [getWindow, getPathname],
  ({ height, scrollTop }, pathname) => scrollTop < height && pathname === '/'
)

export const isDown = createSelector(
  [getWindow],
  ({ scrollTop, prevScrollTop }) => scrollTop === 0 || scrollTop <= prevScrollTop
)
