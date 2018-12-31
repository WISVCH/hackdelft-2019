import React from 'react'
import styled from 'styled-components'
import { theme } from 'utilities/styles'

import { H2, H3, Text, Markdown, Row, Column } from 'components/lib'
import Section from 'components/Section'

import speakers from 'components/Speakers/data'

const format = d =>
  d.toUTCString().split(' ')[4].substring(0, 5)

const Image = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding-top: 100%;
  border-radius: ${theme('border','radius')};

  background: url(${props => props.src}) no-repeat center / cover;
`

const TextLabel = styled.strong`
  display: inline-block;
  width: 5em;

  color: ${theme('colors','text')};

  &::after {
    content: ':';
  }
`

const Event = ({start, end, meta, title, bgImage, abstract, name, bio}) =>
  <div>
    <Section>
      <Row rtl>
        <Column size={6} mSize={12}>
          <Image src={bgImage} alt={title} />
        </Column>
        <Column size={6} mSize={12}>
          <H2>{title}</H2>
          <Text>
            <TextLabel>Time</TextLabel>{format(start)} - {format(end)}<br />
            <TextLabel>Speaker</TextLabel>{meta}
          </Text>
        </Column>
      </Row>
    </Section>
    <Section id="abstract">
      <H3>Abstract</H3>
      <Markdown source={abstract} />
    </Section>
    <Section id="bio">
      <H3>About {name}</H3>
      <Markdown source={bio} />
    </Section>
  </div>

export default ({speaker, ...rest}) => {
  const { bio, abstract, name } = speakers.find(s => s.name === speaker)

  return <Event
    bio={bio ? bio : 'Coming soon'}
    abstract={abstract ? abstract : 'Coming soon'}
    name={name}
    {...rest} />
}
