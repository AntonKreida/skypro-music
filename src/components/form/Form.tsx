import { useId } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Input } from '@shared/';

import { schemaAuth, TSchemaAuth } from './schemas';
import * as Styled from './Form.styled';


export const Form = () => {
  const { control, handleSubmit } = useForm<TSchemaAuth>({
    resolver: zodResolver(schemaAuth),
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
    }
  });
  const form = useId();

  const submitHandler: SubmitHandler<TSchemaAuth> = (dataFrom) => {
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
      </Styled.FormPanelWrapper>

      <Styled.FormButtonPanel>
        <Button form={ form } text="Войти" type="submit" />
        <Button text="Зарегистрироваться" type="button" />
      </Styled.FormButtonPanel>

    </Styled.FormWrapper>
  );
};
