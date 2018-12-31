import styled from 'styled-components'
import { opacity, theme } from 'utilities/styles'

const Title = level => styled[`h${level}`]`
  color: ${props => opacity(props.theme.colors.text, props.theme.opacity.titles)};
  font-size: ${theme('fonts','sizes',`h${level}`)};
`

export const H1 = Title(1)
export const H2 = Title(2)
export const H3 = Title(3)
export const H4 = Title(4)
export const H5 = Title(5)
export const H6 = Title(6)

export default Title
