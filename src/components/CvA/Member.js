import React from 'react'
import styled from 'styled-components'
import { theme, media } from 'utilities/styles'

import { H3, Text } from 'components/lib'

const Member = styled.div`
  height: 8em;
  padding: 1em;
  margin-bottom: 1em;
  border-radius: ${theme('border','radius')};

  vertical-align: middle;

  background-color: rgba(255, 255, 255, .2);

  ${media.small`font-size: .8em;`}
`

const Left = styled.div`
  position: relative;

  display: inline-block;
  width: 6em;
  height: 6em;
  border: .5em solid #fff;
  border-radius: ${theme('border','radius')};

  background-color: #fff;

  vertical-align: middle;
`

const Logo = styled.img`
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;

  max-width: 100%;
  max-height: 100%;
  margin: auto;
`

const Right = styled.div`
  position: relative;

  display: inline-block;
  width: calc(100% - 10em);
  margin-left: 2em;

  vertical-align: middle;
`

const Name = H3.extend`
  margin: 0;

  font-size: 1.75em;
`

const Tagline = Text.extend`
  margin: 0;
`

export default ({ image, company, name, role }) => (
  <Member>
    <Left>
      <Logo src={image} alt={company} />
    </Left>
    <Right>
      <Name>{name.toLowerCase()}</Name>
      <Tagline>{role} at {company}</Tagline>
    </Right>
  </Member>
)
