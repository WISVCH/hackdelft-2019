import React from 'react'
import styled, { css } from 'styled-components'
import { media } from 'utilities/styles'

import Avatar from './Avatar'
import Links from './Links'

const Social = styled.div`
  display: inline-block;
  width: 8em;
  margin-right: 1em;

  text-align: center;

  ${props => props.small && css`
    width: 6em;

    ${'' /* ${Avatar} {
      width: 6em;
      height: 6em;
    } */}
  `}

  ${media.small`
    ${props => !props.horizontal && css`
        display: block;
        margin: auto;
    `}
  `}
`

export default ({link, img, name, links, ...rest}) => (
  <Social {...rest}>
    <Avatar
      link={link}
      img={img}
      name={name} />
    { links
      ? <Links links={links} />
      : null }
  </Social>
)
