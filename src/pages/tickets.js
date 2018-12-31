import React from 'react'

import { Page, H1 } from 'components/lib'
import Section from 'components/Section'
import Tickets from 'components/Tickets'

export default () => (
  <Page>
    <Section>
      <H1>Tickets</H1>
      <Tickets />
    </Section>
  </Page>
)
