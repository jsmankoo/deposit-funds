import styled from 'styled-components'

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  ${props => props.flex && `flex: ${props.flex};`}
  padding: ${props => props.padding || 0};
`
export default Col