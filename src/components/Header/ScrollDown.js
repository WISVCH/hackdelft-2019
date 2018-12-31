import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'

const scroller = keyframes`
  from { transform: translate(-50%, 0); }
  to { transform: translate(-50%, 1em); }
`

const ScrollDown = styled.div`
  position: absolute;
  left: 50%; top: 80vh;

  display: inline-block;

  color: #fff;
  font-size: 2em;

  opacity: ${props => props.visible ? 1 : 0};

  animation: ${scroller} 2s ease-in-out infinite alternate;

  transition: opacity .4s ease-out;
`

const mapStateToProps = state => ({
  visible: state.window.scrollTop === 0
})

export default connect(
  mapStateToProps
)(ScrollDown)
