import React from 'react'

import { H2 } from 'components/lib'
import Event from './Event'

import events from './data'

export default () => (
  <div>
    <H2>22 October 2018</H2>
    {events.map((event, i) =>
      <Event key={i} {...event} />
    )}
  </div>
)
