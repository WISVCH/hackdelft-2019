import styled, { css } from 'styled-components'
import { media } from 'utilities/styles'

const Wrapper = styled.div`
  max-width: 65em;
  margin-left: auto;
  margin-right: auto;

  padding-left: 2.5em;
  padding-right: 2.5em;

  ${props => props.small  && css`max-width: 30em;`}
  ${props => props.medium && css`max-width: 45em;`}
  ${props => props.xlarge && css`max-width: 75em;`}

  ${media.small`
    max-width: 62.5em;
    padding-left: 1.25em;
    padding-right: 1.25em;
  `}
`

export default Wrapper
