import React from 'react'
import styled from 'styled-components'

import Routes from 'containers/Routes'

import { Container } from 'components/lib'
import PageTexture from 'components/PageTexture'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

const App = styled.div`
  width: 100%;
  height: 100%;
`

export default () => (
  <App>
    <Container>
      <PageTexture size="12vw" />
      <Navigation />
      <Routes />
      <Footer />
    </Container>
    {/* Modals here */}
  </App>
)
