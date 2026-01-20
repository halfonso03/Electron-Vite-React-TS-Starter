import styled, { css } from 'styled-components';
type ButtonType = 'primary' | 'secondary' | 'danger' | 'danger2';
type Sizes = 'small' | 'medium' | 'large';

interface ButtonProps {
  variation: ButtonType;
  size?: Sizes;
  selected?: boolean
}

const sizes = {
  small: css`
    font-size: .9rem !important;
    padding: 0.2rem 0.6rem;
    text-transform: uppercase;
    text-align: center;
  `,
  medium: css`
    font-size: 1rem !important;
    padding: .5rem 1rem .4rem 1rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.2rem;
    padding: .6rem 1.2rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    border: 1px solid var(--color-brand-500);
    &:hover {
      background-color: var(--color-brand-700);
    };
    &:disabled {
      opacity: .8;
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-900);
    border: 1px solid var(--color-grey-800);
    &:hover {
      background-color: var(--color-grey-800);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);
    border: 1px solid var(--color-red-900);
    &:hover {
      background-color: var(--color-red-800);
    };
    &:disabled {
      opacity: .7;
    }
  `,
  danger2: css`
    color: var(--color-red-100);
    background-color: var(--color-red-900);
    border: 1px solid var(--color-red-1000);
    &:hover {
      background-color: var(--color-red-800);
    }
  `
};


const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  &:disabled {
    opacity: .8;
  }
  ${(props) => variations[props.variation]}
  ${(props) => !props.size ? sizes['medium'] : sizes[props.size]}
  ${(props) => props.selected && { outline: '2px solid var(--color-brand-600)', background: 'var(--color-grey-800)' }}
 
`;

Button.defaultProps = {
  variation: 'primary',
  size: 'medium',
};

export default Button;
