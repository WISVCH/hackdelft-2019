import React from 'react'
import styled from 'styled-components'
import { theme } from 'utilities/styles'

import { Text, H3 } from 'components/lib'
import Section from './Section'

const Info = Section.extend`
  background-color: ${theme('colors','secondary')};
`

const InfoLabel = styled.strong`
  display: inline-block;
  width: 5em;

  color: ${theme('colors','text')};

  &::after {
    content: ':';
  }
`

export default () => (
  <Info>
    <Text>W.I.S.V. ‘Christiaan Huygens’ (CH) is the study association for students of Applied Mathematics and Computer Science at the Delft University of Technology.</Text>
    <H3>Contact Info</H3>
    <Text>
      <InfoLabel>Address</InfoLabel> Mekelweg 4, 2628CD Delft<br />
      <InfoLabel>Email</InfoLabel> symposium@ch.tudelft.nl<br />
      <InfoLabel>Phone</InfoLabel> 015-278 2532<br />
      <InfoLabel>CoC</InfoLabel> 40397077
    </Text>
    <Text>Copyright &copy;2015-{new Date().getFullYear()} by W.I.S.V. ‘Christiaan Huygens’. All rights reserved.</Text>
  </Info>
)
