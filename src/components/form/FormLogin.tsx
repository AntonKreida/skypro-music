import { NavLink, useNavigate } from 'react-router-dom';
import { useId, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Input } from '@shared/';
import { useAppAuthContext } from '@hook/';

import { schemaLogin, TSchemaLogin } from './schemas';
import * as Styled from './Form.styled';


export const FormLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { control, handleSubmit } = useForm<TSchemaLogin>({
    resolver: zodResolver(schemaLogin),
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
    }
  });
  const form = useId();
  const { handlerOnAuthUser } = useAppAuthContext();

  const submitHandler: SubmitHandler<TSchemaLogin> = (dataFrom) => {
    const response = handlerOnAuthUser(dataFrom);

    if (response) {
      navigate('/skypro-music');
      setError(false);

      return;
    }

    setError(true);
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
        { error && (
          <Styled.FormSubmitErrorMessage>
            Пользователя не существует! Попробуйте еще раз!
          </Styled.FormSubmitErrorMessage>
        ) }
      </Styled.FormPanelWrapper>

      <Styled.FormButtonPanel>
        <Button form={ form } text="Войти" type="submit" />
        <NavLink to="/signIn">
          <Button color="purple" text="Зарегистрироваться" type="button" />
        </NavLink>
      </Styled.FormButtonPanel>

    </Styled.FormWrapper>
  );
};
