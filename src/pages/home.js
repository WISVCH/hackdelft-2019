import React from 'react'

import { H2, Text, Page, Row, Column, Button, Image } from 'components/lib'

import Header from 'components/Header'
import Section from 'components/Section'

import IntroImage from 'components/IntroImage'
import Introduction from 'components/Introduction'
import Speakers from 'components/Speakers'
import CvA from 'components/CvA'

import team from 'assets/team.jpg'

export default () => (
  <Page>
    <IntroImage />
    <Header />
    <Section id="intro">
      <Introduction />
    </Section>
    <Section id="speakers">
      <H2>The Speakers</H2>
      <Speakers />
    </Section>
    <Section id="about">
      <Row>
        <Column size={5} sSize={12}>
          <H2>About Us</H2>
          <Text>Care for the Future is organised by a team of 8 students from W.I.S.V. ‘Christiaan Huygens’.</Text>
          <Button medium to="/about">Learn more</Button>
          <br /><br />
        </Column>
        <Column size={1} sSize={0} />
        <Column size={6} sSize={12}>
          <Image src={team} alt="The team" />
        </Column>
      </Row>
    </Section>
    <Section id="CvA">
      <Row>
        <Column size={6} lSize={9} mSize={12}>
          <H2>Board of Recommendation</H2>
          <Text>The following people, speaking for their respectable institutions acknowledge the importance and competence of the symposium and recommend supporting the organisation.</Text>
        </Column>
      </Row>
      <CvA />
    </Section>
  </Page>
)
