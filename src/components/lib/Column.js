import styled from 'styled-components'
import { media } from 'utilities/styles'

const Column = styled.div`
  display: block;
  float: left;
  padding-left: ${props => props.theme.columns.gap/2}px;
  padding-right: ${props => props.theme.columns.gap/2}px;

  width: ${props => 100 * props.size / props.theme.columns.count}%;
  min-height: 1px;

  ${props => props.lSize && media.large`width: ${100 * props.lSize / props.theme.columns.count}%;`}
  ${props => props.mSize && media.medium`width: ${100 * props.mSize / props.theme.columns.count}%;`}
  ${props => props.sSize && media.small`width: ${100 * props.sSize / props.theme.columns.count}%;`}
`

export default Column
