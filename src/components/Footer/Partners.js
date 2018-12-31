import React from 'react'
import { theme, opacity } from 'utilities/styles'

import { H2, H4, Text, Row, Column } from 'components/lib'
import Section from './Section'
import Partner from './Partner'

import partners from './data'

const Partners = Section.extend`
  background-color: ${props => opacity(theme('colors','secondary')(props), .5)};
`

const GroupTitle = H4.extend`
  margin: 1.5em 0 .25em;
`

export default () => (
  <Partners>
    <Row verticalAlign="flex-start">
      <Column size={6} mSize={12}>
        <H2>Partners and Sponsors</H2>
        <Text>This symposium would not be possible without the generous support from the following partners and sponsors</Text>
      </Column>
      <Column size={6} mSize={12}>
        {partners.map((group, i) => (
          <div key={i}>
            <GroupTitle>{group.name}</GroupTitle>
            <Row>
              {group.members.map((partner, j) => (
                <Column key={j} size={4}>
                  <Partner {...partner} />
                </Column>
              ))}
            </Row>
          </div>
        ))}
      </Column>
    </Row>
  </Partners>
)
