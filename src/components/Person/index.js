import React from 'react'
import styled, { css } from 'styled-components'
import { media } from 'utilities/styles'

import Social from './Social'
import Info from './Info'

import unknown from 'assets/speakers/unknown.svg'

const Person = styled.div`
  margin: 4em 0;

  ${props => props.small && css`margin: 2em 0;`}
  ${media.small`font-size: .8em;`}
`

export default ({ revealed=false, link=null, links=[], img, name, title, about, small=null, horizontal=null, className }) => (
  <Person small={small} horizontal={horizontal}>
    <Social
      small={small} horizontal={horizontal}
      link={link}
      links={revealed && links.length ? links : null}
      name={name}
      img={(revealed && img) ? img : unknown} />
    <Info
      small={small} horizontal={horizontal}
      name={revealed ? name : 'To be revealed'}
      title={revealed ? title : 'Check back soon'}
      about={revealed ? about : null} />
  </Person>
)
