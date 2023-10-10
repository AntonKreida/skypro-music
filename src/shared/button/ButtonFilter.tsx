import { FC, HTMLProps } from 'react';

import * as Styled from './Button.styled';


interface IButtonFilterProps extends HTMLProps<HTMLButtonElement> {
  type: 'button' | 'reset' | 'submit';
  text: string;
  onSubmit?: React.FormEventHandler;
  active?: boolean;
}

export const ButtonFilter: FC<IButtonFilterProps> = ({
  text, type, active, ...props
}) => (
  <Styled.ButtonWrapper
    className={ active ? 'active' : '' }
    type={ type }
    // eslint-disable-next-line react/jsx-props-no-spreading
    { ...props }
  >
    <span>{ text }</span>
  </Styled.ButtonWrapper>
);
