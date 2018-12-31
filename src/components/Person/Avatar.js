import React from 'react'
import styled from 'styled-components'

function* duoRand(min, max) {
  let r
  while (true) {
    r = parseInt(min + (max - min) * Math.random(), 10)
    yield r
    yield min + max - r
  }
}

const gen = duoRand(90, 110)

const Avatar = styled.img.attrs({
  alt: ({name}) => name,
  src: ({img}) => img,
  style: _ => ({
    borderTopLeftRadius: `${gen.next().value}% ${gen.next().value}%`,
    borderTopRightRadius: `${gen.next().value}% ${gen.next().value}%`,
    borderBottomRightRadius: `${gen.next().value}% ${gen.next().value}%`,
    borderBottomLeftRadius: `${gen.next().value}% ${gen.next().value}%`,
  })
})`
  width: 100%;

  border-radius: 100%;

  box-shadow: 0 .2em .5em rgba(0, 0, 0, .2);
`

export default ({link, ...rest}) => link
  ? <a href={link} target="_blank">
      <Avatar {...rest} />
    </a>
  : <Avatar {...rest} />
