import styled from 'styled-components'

const Button = styled.button`
  border: 0;
  background: ${props => props.active ? '#7FD34B' : '#2B3038'};
  color: #FFF;
  cursor: pointer;
  font-weight: 700;
  padding: .5rem .75rem;
  margin: .5rem;
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom};`}
  ${props => props.fullWidth && 'width: 100%;'}
  outline: 0;

  &:hover {
    background: #7FD34B;
  }
`
export default Button