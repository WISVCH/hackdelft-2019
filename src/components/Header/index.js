import React from 'react'
import styled from 'styled-components'
import { media } from 'utilities/styles'

import { Wrapper, H1, Text, Button } from 'components/lib'
import GhostLogo from './GhostLogo'
import ScrollDown from './ScrollDown'

const Header = styled.header`
  position: relative;
  margin-bottom: calc(65vmax - 20vw);
`

const HeaderContent = Wrapper.extend`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  min-height: 80vh;
  padding-top: 2em;
  padding-bottom: 2em;
`

const Title = H1.extend`
  font-size: 9vw;
  margin-bottom: 0;

  ${media.not.large`font-size: 6em;`}
`

const Tagline = H1.extend`
  font-size: 6vw;
  margin: 0;

  ${media.not.large`font-size: 4em;`}
`

const Info = Text.extend`
  margin: 2em 0;
`

export default () => (
  <Header>
    <HeaderContent>
      <GhostLogo />
      <Title>HackDelft 2019</Title>
      <Tagline>#ItsHackening!</Tagline>
      <Info>
        May 11 & 12, 2019&nbsp;&nbsp;&nbsp;&nbsp;
        X at TU Delft campus
      </Info>
      <Button primary large to="/tickets">Register now</Button>
    </HeaderContent>
    <ScrollDown>&darr;</ScrollDown>
  </Header>
)
