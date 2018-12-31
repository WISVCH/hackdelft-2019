import React from 'react'
import styled from 'styled-components'

import web from 'assets/icons/web.svg'
import twitter from 'assets/icons/twitter.svg'
import linkedin from 'assets/icons/linkedin.svg'
import lumc from 'assets/icons/lumc.svg'

const PersonLinks = styled.div`
  margin: 1em -.25em 0;
`

const PersonLink = styled.a.attrs({
  innerText: props => props.type,
  href: props => props.url,
  target: _ => '_blank',
})`
  overflow: hidden;

  display: inline-block;
  width: 2em;
  height: 2em;
  margin: .25em;

  border-radius: .25em;

  box-shadow: 0 .2em .5em rgba(0, 0, 0, .2);

  background: #fff no-repeat center / cover;
  color: transparent;

  background-image: url(${props => {
    switch (props.type) {
      case 'twitter': return twitter
      case 'linkedin': return linkedin
      case 'lumc': return lumc
      default: return web
    }
  }});
`

export default ({ links=[] }) => (
  <PersonLinks>
    {links.map((link, i) => <PersonLink key={i} {...link} />)}
  </PersonLinks>
)
