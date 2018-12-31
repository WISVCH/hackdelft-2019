import React from 'react'

import cva from './members'

import { Row, Column } from 'components/lib'
import Texture from 'components/Texture'
import Member from './Member'

const RelRow = Row.extend`
  position: relative;
`

const BoardTexture = Texture.extend`
  width: 80vmax;
  height: 30vmax;

  top: -20vmax; left: 40%;

  opacity: .25;
`

export default () => (
  <RelRow>
    <BoardTexture />
    {cva.map((props, i) => (
      <Column key={i} size={6} lSize={12}>
        <Member {...props} />
      </Column>
    ))}
  </RelRow>
)
