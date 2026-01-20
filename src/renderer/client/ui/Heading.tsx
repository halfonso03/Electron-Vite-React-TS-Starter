import styled, { css } from 'styled-components';

const Heading = styled.h1`
  display: flex;
  margin-bottom: 1rem;
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 4rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 3rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      font-weight: 400;
    `}
    
    ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 1.5rem;
      font-weight: 300;
    `}

     ${(props) =>
    props.as === 'h5' &&
    css`
      font-size: 1.2rem;
      font-weight: 300;
    `}
`;

export default Heading;
