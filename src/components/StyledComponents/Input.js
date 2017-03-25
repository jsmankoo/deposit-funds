import styled from 'styled-components'

const Input = styled.input`
  background: #2B3038;
  border: 0;
  color: #FFF;
  font-size: 1rem;
  line-height: 1.6em;
  padding: .5rem 1rem;
  margin: .5rem;
  outline: 0;
  width: ${props => props.width || '100%'};
  
  &::placeholder {
    color: #2B3038
  }
`
export default Input