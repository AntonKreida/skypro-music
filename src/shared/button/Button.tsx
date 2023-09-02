import { FC, HTMLProps } from 'react';

import * as Styled from './Button.styled';


interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  type: 'button' | 'submit';
  text: string;
  onClick?: React.MouseEventHandler;
  onSubmit?: React.FormEventHandler;
  active?: boolean;
}

export const Button: FC<IButtonProps> = ({
  text, type, onClick, onSubmit, active, form
}) => (
  <Styled.ButtonWrapperDefault
    $typeButton={ type }
    className={ active ? 'active' : '' }
    form={ form }
    type={ type }
    onClick={ onClick }
    onSubmit={ onSubmit }
  >{ text }
  </Styled.ButtonWrapperDefault>
);
