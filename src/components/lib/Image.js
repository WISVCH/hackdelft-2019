import styled from 'styled-components'
import { theme } from 'utilities/styles'

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;

  border-radius: ${theme('border','radius')};
`

export default Image
