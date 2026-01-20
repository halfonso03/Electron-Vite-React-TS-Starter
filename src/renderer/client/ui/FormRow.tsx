import styled from 'styled-components';
import type { FC, ReactNode } from 'react';
import type { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
// import { BsFillExclamationTriangleFill } from 'react-icons/bs';

type FormRowProps = {
  id: string;
  label?: string;
  children: ReactNode;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl>;
  minimalWarning?: boolean;
  swidth?: string | null;
  className?: string;
  labelBackgroundColor?: string;
  style?: object;
};

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1.6fr;

  /* 0.4fr */
  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    /* border-bottom: 1px solid var(--color-grey-100); */
    margin-bottom: 10px;
  }
`;

const Label = styled.label`
  align-self: center;
  font-weight: 500;
`;

// const Error = styled.div`
//   font-size: 1.5rem;
//   color: var(--color-red-500);
// `;

const FormRow: FC<FormRowProps> = ({
  id,
  label,
  // error,
  children,
  // minimalWarning = true,
  className,
  labelBackgroundColor,
  style,
}: FormRowProps) => {
  return (
    <StyledFormRow style={style} className={className}>
      {label && (
        <div
          style={{
            padding: '10px 10px 10px 10px',
            background: labelBackgroundColor,
          }}
        >
          <Label
            htmlFor={id}
            style={{
              textWrap: 'wrap',
              overflowWrap: 'break-word',
            }}
          >
            {label}
          </Label>
        </div>
      )}
      <div className="w-full px-6">{children}</div>
      {/* <div className="pl-2" style={{ maxWidth: '10px' }}>
        {error && !minimalWarning && (
          <Error>
            <BsFillExclamationTriangleFill></BsFillExclamationTriangleFill>
          </Error>
        )}
        {error && minimalWarning && <Error>{error.toString()}</Error>}
      </div> */}
    </StyledFormRow>
  );
};

export default FormRow;
