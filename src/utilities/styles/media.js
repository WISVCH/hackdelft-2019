import { css } from 'styled-components'

const sizes = {
  small:  480,
  medium: 720,
  large:  1080,
}

export const media = {
  ...Object.keys(sizes)
  .reduce((acc, label) => {
    const emSize = sizes[label] / 16
    acc[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)}
      }
    `
    return acc
  }, {}),
  not: {
    ...Object.keys(sizes)
    .reduce((acc, label) => {
      const emSize = (sizes[label] + 1) / 16
      acc[label] = (...args) => css`
        @media (min-width: ${emSize}em) {
          ${css(...args)}
        }
      `
      return acc
    }, {}),
  }
}

export default media
