import React from 'react'

import { Row, Column } from 'components/lib'
import Person from 'components/Person'

import commissioners from './data'

export default () => (
  <Row>
    {commissioners.map(({ title, ...rest }, i) =>
      <Column key={i} size={4} mSize={6}>
        <Person
          revealed={true}
          title={title}
          vertical
          small
          className="Commissioner"
          {...rest}
        />
      </Column>
    )}
  </Row>
)
