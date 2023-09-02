import { FC, HTMLProps } from 'react';

import * as Styled from './Button.styled';


interface IButtonFilterProps extends HTMLProps<HTMLButtonElement> {
  type: 'button' | 'reset' | 'submit';
  text: string;
  onClick?: React.MouseEventHandler;
  onSubmit?: React.FormEventHandler;
  active?: boolean;
}

export const ButtonFilter: FC<IButtonFilterProps> = ({
  text, type, onClick, onSubmit, active
}) => (
  <Styled.ButtonWrapper
    className={ active ? 'active' : '' }
    type={ type }
    onClick={ onClick }
    onSubmit={ onSubmit }
  >{ text }
  </Styled.ButtonWrapper>
);
