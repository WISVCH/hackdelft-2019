import React from 'react'
import styled from 'styled-components'
import { theme, opacity } from 'utilities/styles'

import { H3, Text, Button } from 'components/lib'

const TicketOption = styled.div`
  position: relative;
  overflow: hidden;

  padding: 1em;
  margin-bottom: 1em;
  border-radius: ${theme('border','radius')};

  text-align: center;

  background-color: ${props => opacity(theme('colors','text')(props),.2)};

  &:hover {
    box-shadow: 0 0 0 ${theme('border','width')} ${theme('colors','primary')};
  }
`

const Illustration = styled.div`
  position: relative;
  height: 8em;
  margin: 1em auto;

  background: url(${props => props.src}) no-repeat center / contain;
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 5em;
`

const Price = Text.extend`
  margin: .5em 0 1em;

  font-size: 2em;
  font-weight: bold;

  color: ${theme('colors','text')};
`

export default ({ available, type, background, image, price }) => (
  <TicketOption>
    <Illustration src={image} />
    <Head>
      <H3>{type.toLowerCase()}</H3>
    </Head>
    <Price>€{price}</Price>
    { available
      ? <Button primary large>Buy now</Button>
      : <Button primary large disabled>Soon available</Button>}
  </TicketOption>
)
