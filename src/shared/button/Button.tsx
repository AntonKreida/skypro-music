import { FC, HTMLProps } from 'react';

import * as Styled from './Button.styled';


interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  type: 'button' | 'submit';
  text: string;
  onClick?: React.MouseEventHandler;
  onSubmit?: React.FormEventHandler;
  active?: boolean;
  color?: 'default' | 'purple';
}

export const Button: FC<IButtonProps> = ({
  text, type, onClick, onSubmit, active, form, color = 'default'
}) => (
  <Styled.ButtonWrapperDefault
    $color={ color }
    className={ active ? 'active' : '' }
    form={ form }
    type={ type }
    onClick={ onClick }
    onSubmit={ onSubmit }
  >{ text }
  </Styled.ButtonWrapperDefault>
);
