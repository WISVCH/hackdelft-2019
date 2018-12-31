import React from 'react'

import { Row, Column } from 'components/lib'
import TicketOption from './Option'

import options from './data'

export default () => (
  <Row>
    {options.map((option, i) =>
      <Column key={i} size={3} mSize={6}>
        <TicketOption {...option} />
      </Column>
    )}
  </Row>
)
