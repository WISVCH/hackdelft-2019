import styled from 'styled-components'

const Row = styled.div`
  margin-left: -${props => props.theme.columns.gap/2}px;
  margin-right: -${props => props.theme.columns.gap/2}px;

  &:after {
    content: '';
    display: block;
    clear: both;
  }

  display: flex;
  align-items: ${props => props.verticalAlign || 'center'};
  flex-direction: ${props => props.rtl ? 'row-reverse' : 'row'};
  flex-wrap: wrap;
`

export default Row
