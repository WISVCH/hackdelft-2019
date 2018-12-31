import styled from 'styled-components'
import { media } from 'utilities/styles'

import Section from 'components/Section'

export default styled(Section)`
  ${media.small`padding: 1em 0;`}
  ${media.not.small`padding: 2em 0;`}
  margin: 0;
`
