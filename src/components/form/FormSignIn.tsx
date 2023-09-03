import { useId } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Input } from '@shared/';

import { schemaSignIn, TSchemaSignIn } from './schemas';
import * as Styled from './Form.styled';


export const FormSignIn = () => {
  const { control, handleSubmit } = useForm<TSchemaSignIn >({
    resolver: zodResolver(schemaSignIn),
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
      confirm: '',
    }
  });
  const form = useId();

  const submitHandler: SubmitHandler<TSchemaSignIn> = (dataFrom) => {
    console.log(dataFrom);
  };

  return (
    <Styled.FormWrapper id={ form } onSubmit={ handleSubmit(submitHandler) }>

      <Styled.FormLogoWrapper>
        <Styled.FormLogo />
      </Styled.FormLogoWrapper>

      <Styled.FormPanelWrapper>
        <Input
          control={ control }
          name="email"
          placeholder="Почта"
          type="text"
        />
        <Input
          control={ control }
          name="password"
          placeholder="Пароль"
          type="password"
        />
        <Input
          control={ control }
          name="confirm"
          placeholder="Повторите пароль"
          type="password"
        />
      </Styled.FormPanelWrapper>

      <Styled.FormButtonPanel>
        <Button form={ form } text="Войти" type="submit" />
      </Styled.FormButtonPanel>

    </Styled.FormWrapper>
  );
};
