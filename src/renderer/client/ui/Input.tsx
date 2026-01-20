import styled from 'styled-components';

const Input = styled.input`
  height: 40px; /* Set a specific height for the input */
  line-height: 40px; /* Set line-height equal to the height */
  /* border: 1px solid var(--color-grey-700); */
  background-color: transparent;
  border-radius: var(--border-radius-sm);
  padding: 0.5rem 0.9rem;
  min-width: 0;
  vertical-align: middle;
  box-shadow: var(--shadow-sm);
  width: ${(props) => (props.width ? props.width : '100%')};
`;

export default Input;
