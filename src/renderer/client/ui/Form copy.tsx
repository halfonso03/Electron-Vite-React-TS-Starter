import styled, { css } from 'styled-components';

interface FormProps {
  type?: string;
}
const Form = styled.form<FormProps>`
  ${(props) =>
    props.type === 'regular' &&
    css`
      /* padding: 2rem; */
      /* Box */
      /* background-color: var(--color-grey-1000); */
      /* border: 1px solid var(--color-grey-800);
      border-radius: var(--border-radius-md); */
    `}

  ${(props) =>
    props.type === 'modal' &&
    css`
      width: 80rem;
    `}
  overflow: hidden;
  display: flex;
`;

Form.defaultProps = {
  type: 'regular',
};

export default Form;
