import React from 'react'

import { Text } from 'components/lib'

const format = d =>
  d.toUTCString().split(' ')[4].substring(0, 5)

const EventTime = Text.extend`
  display: inline-block;
  width: 8em;
  margin: 0;

  vertical-align: top;
`

export default ({start, end}) =>
  <EventTime>
    {format(start)} - {format(end)}
  </EventTime>
