import styled from 'styled-components'
import { media } from 'utilities/styles'

import logo from 'assets/logo/symposium_logo_white.svg'

export default styled.img.attrs({
  src: () => logo,
  alt: () => "Care for the Future - Improving health bit by bit"
})`
  display: block;
  height: 3em;

  ${media.small`margin: auto;`}
  ${media.not.small`
    float: left;
    padding: .25em;
  `}
`
