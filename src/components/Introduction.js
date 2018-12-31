import React from 'react'
import styled from 'styled-components'
import { theme, media, darken } from 'utilities/styles'

import { H2, Text } from 'components/lib'
import Texture from 'components/Texture'

import cj from 'assets/intro.png'

const IntroTexture = Texture.extend`
  ${media.not.medium`
    left: 60%; top: 0;
    right: -40%; bottom: -40%;

    background-size: 6em;
  `}

  ${media.medium`
    left: -20%; top: 70%;
    right: -40%; bottom: -30%;

    background-size: 8em;
  `}

  opacity: .2;

  filter: invert(100%);
`

const Introduction = styled.div`
  position: relative;
  z-index: 1;

  overflow: hidden;

  border: ${theme('border','width')} solid ${props =>
    darken(props.theme.colors.primary, 20)};
  border-radius: ${theme('border','radius')};

  background-color: ${theme('colors','primary')};

  ${media.small`padding: 1em 2em;`}
  ${media.not.small`padding: 2em 4em;`}
`

const IntroText = Text.extend`
  ${media.not.medium`margin-right: 30%;`}
`

const Image = styled.img`
  ${media.not.medium`
      position: absolute;
      right: 1em; bottom: 0;

      width: 30%;
  `}

  ${media.medium`
      display: block;
      width: 60%;
      margin: -4em -1em -2em auto;
  `}

  ${media.small`
    width: 80%;
    margin: -4em -1em -1em auto;
  `}
`

export default () => (
  <Introduction>
    <IntroTexture size="4em" />
    <H2>Introducing HackDelft 2019</H2>
    <IntroText>
A hackathon can be described as an “invention marathon”: small
teams of students interested in math, computer science and design get 24
hours to conceive of and build some sort of product or service. The teams then
pitch their ideas to a panel of judges from academia and industry, who award the
grand prize to their favorite “hack.” Partner companies provide the participants with
    data and software to use, and often award prizes to the teams that make the most
creative use of their tools. Our hackathon will be a great place for over 100 students
from TU Delft and beyond to
show off their creativity and technical skills, network with amazing companies, and –
above all – have a fun weekend and make new friends.
    <br />
<br />
    </IntroText>
    <Image src={cj} alt="Cor-Jan Heijlema" />
  </Introduction>
)
