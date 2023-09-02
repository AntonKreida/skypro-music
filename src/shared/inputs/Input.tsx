import { FC } from 'react';
import { Controller, Control } from 'react-hook-form';

import * as Styled from './Input.styled';


interface IInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  type: string;
  placeholder: string;
}

export const Input: FC<IInputProps> = ({
  control, name, type, placeholder
}) => (
  <Controller
    control={ control }
    name={ name }
    render={ ({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
      <Styled.InputLabelWrapper>
        <Styled.InputWrapper
          error={ error || null }
          placeholder={ placeholder }
          type={ type }
          value={ value }
          onBlur={ onBlur }
          onChange={ onChange }
        />
        { error && (
          <Styled.InputErrorMessageWrapper>
            { error.message }
          </Styled.InputErrorMessageWrapper>
        ) }
      </Styled.InputLabelWrapper>
    ) }
  />
);
