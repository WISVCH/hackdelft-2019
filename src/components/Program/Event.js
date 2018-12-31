import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import EventTime from './EventTime'
import EventContent from './EventContent'

const Event = styled.div`
  margin-bottom: 1em;

  vertical-align: top;
`

export default ({ start, end, event, ...rest }) => (
  <Event>
    <EventTime start={start} end={end} />
    {event
      ? <Link to={`/event/${event}`}>
          <EventContent active {...rest} />
        </Link>
      : <EventContent {...rest} /> }
  </Event>
)
