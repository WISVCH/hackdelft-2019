import React from 'react'
import styled, { css } from 'styled-components'
import { darken, lighten, theme } from 'utilities/styles'

import { Link } from 'react-router-dom'

const Button = styled.button`
  ${props => props.block && css`
    display: block;
    width: 100%;
  `}

  border-style: solid;
  border-color: ${theme('colors','text')};
  border-width: ${theme('border','width')};
  border-radius: 2em;

  font-family: ${theme('fonts','titles')};

  background: transparent;
  color: ${theme('colors','text')};

  ${props => props.primary && css`
    border-color: ${darken(theme('colors','primary')(props), 20)};
    background-color: ${theme('colors','primary')(props)};
  `}

  ${props => props.small && css`padding: .125em .25em; font-size: .8em;`}
  ${props => props.medium && css`padding: .3em .5em .2em;`}
  ${props => props.large && css`padding: .6em 1em .4em; font-size: 1.5em;`}

  ${props => !props.disabled && css`
    &:hover {
      cursor: pointer;
      ${props.primary && css`
        border-color: ${darken(props.theme.colors.primary, 10)};
        background-color: ${lighten(props.theme.colors.primary, 10)};
      `}
    }
  `}

  ${props => props.disabled && css`
    opacity: .5;
  `}
`

export default ({to, ...rest}) => to
  ? <Link to={to}>
      <Button {...rest} />
    </Link>
  : <Button {...rest} />
