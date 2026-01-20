import styled from 'styled-components';

const ButtonText = styled.button`
  color: var(--color-brand-500) !important;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  /* font-size: 1rem !important; */
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    color: var(--color-brand-600);
  }
`;

export default ButtonText;
