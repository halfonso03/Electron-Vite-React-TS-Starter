import type { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const StyledHeader = styled.div`
  color: var(--color-grey-100);
  background-color: var(--color-grey-900);
  letter-spacing: 0.9px;
  font-size: 1.5rem;
`;

export default function Header({ children }: Props) {
  return <StyledHeader>{children}</StyledHeader>;
}
