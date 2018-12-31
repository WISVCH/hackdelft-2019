import React from 'react'

import { Page, H1, Text, Link } from 'components/lib'
import Section from 'components/Section'

export default () => (
  <Page>
    <Section>
      <H1>No Symposium found here</H1>
      <Text>Perhaps you want to go back to <Link to="/">home</Link>.</Text>
    </Section>
  </Page>
)
