import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { media } from 'utilities/styles'

import * as navigation from 'selectors/navigation'

import { Link } from 'react-router-dom'
import { Wrapper } from 'components/lib'
import StyledLink from './Link'
import NavLogo from './Logo'

const Navigation = styled.div`
  position: fixed;
  left: 0;
  top: ${props => props.down ? 0 : -7}em;
  right: 0;
  z-index: 2;

  padding: .5em 0 0;

  line-height: 1;

  box-shadow: 0 .2em .5em rgba(0, 0, 0, .2);

  background-color: rgba(0, 0, 0, .5);
  color: #fff;

  transition: top .2s ease-out;
`

const Links = styled.div`
  ${media.small`
    overflow-x: auto;
    white-space: nowrap;
  `}

  ${media.not.small`
    float: left;
  `}
`

const BackLink = styled.div`
  ${media.medium`
    display: none;
  `}

  float: right;

  opacity: .8;
`

const mapStateToProps = (state) => ({
  down: navigation.isDown(state),
  pathname: navigation.getPathname(state),
})

export default connect(
  mapStateToProps
)(props => (
  <Navigation {...props}>
    <Wrapper>
      <Link to="/"><NavLogo /></Link>
      <Links>
        <StyledLink to="/program">Program</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink href="/2018/tickets" target="_blank">Tickets</StyledLink>
      </Links>
      <BackLink>
        <StyledLink
          href="https://symposium.ch.tudelft.nl/2017/"
          target="_blank">Back to 2017 &rarr;</StyledLink>
      </BackLink>
    </Wrapper>
  </Navigation>
))
