import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import image from 'assets/header.jpg'

const Overlay = styled.div.attrs({
  style: ({scrollTop, windowHeight}) => ({
    transform: `translate(-50%, 0) scale(${Math.min(.8 + .2 * scrollTop / windowHeight, 1)})`
  })
})`
  position: absolute;
  left: 50%; top: calc(80vh - 20vw);

  transform: translate(-50%, 0);
  transform-origin: 50% -100%;

  will-change: transform;

  &::after {
    content: '';

    position: absolute;
    left: 0; top: 0; right: 0; bottom: 0;

    background-image: linear-gradient(#000 15%, transparent 35%, transparent 80%, #000);
  }
`

const IntroImage = styled.img.attrs({
  src: image,
  style: ({scrollTop, windowHeight}) => ({
    opacity: .1 + scrollTop / windowHeight
  })
})`
  width: 125vmax;

  will-change: opacity;
`

const mapStateToProps = (state) => ({
  scrollTop: state.window.scrollTop,
  windowHeight: state.window.height,
})

export default connect(
  mapStateToProps
)((props) => (
  <Overlay {...props}>
    <IntroImage {...props} />
  </Overlay>
))
