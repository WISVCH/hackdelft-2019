import React from 'react'

import speakers from './data'

import { Row, Column } from 'components/lib'
import Speaker from './Speaker'

export default () => (
  <div>
    {speakers.map((speaker, i) => (
      <Row key={i}>
        {i % 2 ? <Column size={6} mSize={4} sSize={12} /> : null}
        <Column size={6} mSize={8} sSize={12}>
          <Speaker {...speaker} side={i % 2} />
        </Column>
        {i % 2 ? null : <Column size={6} mSize={4} sSize={12} />}
      </Row>
    ))}
  </div>
)
