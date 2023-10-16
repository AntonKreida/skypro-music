import { NavLink, useNavigate } from 'react-router-dom';
import { useId } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Input } from '@shared/';
import { useAppDispatch, useAppSelector } from '@hook/';
import { errorTitle } from '@interface/';
import { getStateUser, postCreateUser } from '@redux/';

import { schemaSignIn, TSchemaSignIn } from './schemas';
import * as Styled from './Form.styled';


export const FormSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, isError } = useAppSelector(getStateUser);

  const { control, handleSubmit } = useForm<TSchemaSignIn >({
    resolver: zodResolver(schemaSignIn),
    mode: 'onTouched',
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirm: '',
    }
  });
  const form = useId();


  const submitHandler: SubmitHandler<TSchemaSignIn> = async (dataForm) => {
    const { meta } = await dispatch(postCreateUser(dataForm));

    if (meta.requestStatus === 'fulfilled') {
      navigate('/login');
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
          name="username"
          placeholder="Имя пользователя"
          type="text"
        />
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

        { isError && typeof isError === 'string' && (
          <Styled.FormSubmitErrorMessage>{ isError }</Styled.FormSubmitErrorMessage>
        ) }
        { isError && typeof isError !== 'string' && (
          Object.entries(isError).map((errorItem: [string, string[]]) => (
            <Styled.FormErrorMessagesWrapper key={ errorItem[0] }>
              <Styled.FromErrorMessageListTitle>
                { errorTitle[errorItem[0] as keyof typeof errorTitle] }
              </Styled.FromErrorMessageListTitle>
              { errorItem[1].map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Styled.FromErrorMessageItem key={ index }>{ item }</Styled.FromErrorMessageItem>
              )) }
              <Styled.FormErrorMessageList />
            </Styled.FormErrorMessagesWrapper>
          ))
        ) }

      </Styled.FormPanelWrapper>

      <Styled.FormButtonPanel>

        <Styled.FormButtonPanel>
          <Button disabled={ isLoading } form={ form } text="Зарегистрироваться" type="submit" />
        </Styled.FormButtonPanel>

        <NavLink to="/login">
          <Button color="purple" disabled={ isLoading } text="Вернуться назад" type="button" />
        </NavLink>

      </Styled.FormButtonPanel>

    </Styled.FormWrapper>
  );
};
