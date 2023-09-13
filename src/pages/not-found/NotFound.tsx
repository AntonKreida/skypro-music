import { useNavigate } from 'react-router-dom';

import { Button } from '@shared/';

import * as Styled from './NotFound.styled';


export const NotFound = () => {
  const navigate = useNavigate();

  const handlerOnClickBackHomepage = () => {
    navigate('/skypro-music');
  };

  return (
    <Styled.NotFoundWrapper>

      <Styled.NotFoundNumberText>
        404
      </Styled.NotFoundNumberText>

      <Styled.NotFoundTitleWrapper>
        <Styled.NotFoundTitle>
          Страница не найдена
        </Styled.NotFoundTitle>
        <Styled.NotFoundIcon />
      </Styled.NotFoundTitleWrapper>

      <Styled.NotFoundSubtitle>
        Возможно, она была удалена или
        перенесена на другой адрес
      </Styled.NotFoundSubtitle>

      <Styled.NotFoundButtonWrapper>
        <Button
          color="purple"
          text="Вернуться на главную"
          type="button"
          onClick={ handlerOnClickBackHomepage }
        />
      </Styled.NotFoundButtonWrapper>
    </Styled.NotFoundWrapper>
  );
};
