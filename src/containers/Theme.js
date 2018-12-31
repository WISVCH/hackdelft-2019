import React from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'

import monthoersOTF from 'assets/fonts/monthoers.otf'
import monthoersTTF from 'assets/fonts/monthoers.ttf'

const theme = {
  fonts: {
    main: 'Avenir, Lato, sans-serif',
    titles: 'Monthoers, sans-serif',
    sizes: {
      'h1': '4em',
      'h2': '3em',
      'h3': '2em',
      'h4': '1.5em',
      'h5': '1.25em',
      'h6': '1.1em',
    }
  },
  colors: {
    text: '#fff',
    background: '#000',
    primary: '#f44336',
    secondary: '#16255d',
    accent: '#e87511',
    success: '#4caf50',
    warning: '#ffc107',
    error: '#f44336',
  },
  opacity: {
    titles: 1,
    text: 0.8,
  },
  border: {
    width: '.25em',
    radius: '.5em',
  },
  columns: {
    count: 12,
    gap: 16,
  },
  lineHeight: 1.5,
}

injectGlobal`
  @font-face {
    font-family: Monthoers;
    src: url(${monthoersOTF});
    src: url(${monthoersTTF}) format('truetype');

    font-weight: normal;
    font-style: normal;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;

    font-family: ${theme.fonts.main};
    text-rendering: geometricPrecision;
  }

  input, textarea, select, button {
    font: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.titles};
    font-weight: 100;
  }
`

const Theme = (props) => (
  <ThemeProvider theme={theme} {...props} />
)

export default Theme
