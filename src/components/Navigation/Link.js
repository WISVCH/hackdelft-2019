import React from 'react'
import styled from 'styled-components'
import { media } from 'utilities/styles'

import { NavLink } from 'react-router-dom'

const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 1em;
  border-bottom: .2em solid transparent;

  font-weight: normal;
  text-decoration: none;

  color: currentColor;

  ${media.small`padding-bottom: .8em;`}
  ${media.not.small`padding-bottom: 1.3em;`}

  &.active {
    border-bottom-color: currentColor;
  }
`

const StyledExternalLink = styled.a`
  display: inline-block;
  padding: 1em;
  border-bottom: .2em solid transparent;

  font-weight: normal;
  text-decoration: none;

  color: currentColor;

  ${media.small`padding-bottom: .8em;`}
  ${media.not.small`padding-bottom: 1.3em;`}

  &.active {
    border-bottom-color: currentColor;
  }
`

export default ({ href, ...rest }) => href
  ? <StyledExternalLink href={href} {...rest} />
  : <StyledLink {...rest} />
