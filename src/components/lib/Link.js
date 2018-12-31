import React from 'react'
import styled from 'styled-components'
import { theme } from 'utilities/styles'

import { Link } from 'react-router-dom'

const ReactLink = styled(Link)`
  color: ${theme('colors','primary')};
`

const HtmlLink = styled.a`
  color: ${theme('colors','primary')};
`

export default ({href, ...rest}) => href
  ? <HtmlLink href={href} {...rest} />
  : <ReactLink {...rest} />
