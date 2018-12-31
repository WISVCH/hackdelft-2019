import React from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'
import { theme } from 'utilities/styles'
import * as Modals from 'ducks/modals'

const Container = styled.div`
  transition: filter .4s ease-out;

  will-change: filter;

  ${props => props.overlaid && css`
    filter: blur(1em) brightness(90%);
    & > * { pointer-events: none; }
  `}

  background-color: ${theme('colors','background')};
`

const mapStateToProps = (state) => ({
  overlaid: state.modals.current !== null
})

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(Modals.close())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ onClick, children, overlaid, ...props }) => overlaid
  ? <Container onClick={onClick} overlaid={overlaid} {...props}>{children}</Container>
  : <Container overlaid={overlaid} {...props}>{children}</Container>
)
