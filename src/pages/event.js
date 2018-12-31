import React from 'react'

import { Page } from 'components/lib'
import Event from 'components/Event'

import events from 'components/Program/data'

export default ({match}) => (
  <Page>
    <Event {...events.find(e => e.event === match.params.event)} />
  </Page>
)
