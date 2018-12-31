import styled from 'styled-components'

import logo from 'assets/logo/symposium_logo_white.svg'

const GhostLogo = styled.img.attrs({
  src: logo,
  alt: "Care for the Future"
})`
  position: absolute;
  top: 0;
  right: 0; bottom: 0;

  width: 75%;
  margin: auto;

  opacity: .3;

  transform: translate(15%, 0);
`

export default GhostLogo
