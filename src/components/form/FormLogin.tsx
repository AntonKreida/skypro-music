import { NavLink, useNavigate } from 'react-router-dom';
import { useId } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Input } from '@shared/';
import { useAppDispatch, useAppSelector } from '@hook/';
import { getStateUser, postGetToken, postLoginUser } from '@redux/';

import { schemaLogin, TSchemaLogin } from './schemas';
import * as Styled from './Form.styled';


export const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, isError } = useAppSelector(getStateUser);
  const { control, handleSubmit } = useForm<TSchemaLogin>({
    resolver: zodResolver(schemaLogin),
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
    }
  });
  const form = useId();

  const submitHandler: SubmitHandler<TSchemaLogin> = async (dataFrom) => {
    const { meta } = await dispatch(postLoginUser(dataFrom));

    console.log(meta.requestStatus);

    if (meta.requestStatus === 'fulfilled') {
      await dispatch(postGetToken(dataFrom));
      navigate('/skypro-music', { replace: true });
    }
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
        { typeof isError === 'string' && (
          <Styled.FormSubmitErrorMessage>
            { isError }
          </Styled.FormSubmitErrorMessage>
        ) }
        { isError && (
          <Styled.FormSubmitErrorMessage>Что-то пошло не так попробуйте позже :(</Styled.FormSubmitErrorMessage>
        ) }
      </Styled.FormPanelWrapper>

      <Styled.FormButtonPanel>
        <Button disabled={ isLoading } form={ form } text="Войти" type="submit" />
        <NavLink to="/signIn">
          <Button color="purple" disabled={ isLoading } text="Зарегистрироваться" type="button" />
        </NavLink>
      </Styled.FormButtonPanel>

    </Styled.FormWrapper>
  );
};
