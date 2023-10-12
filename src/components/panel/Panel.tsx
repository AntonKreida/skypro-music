import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppAuthContext } from '@hook/';

import * as Styled from './Panel.styled';


interface IPanel {
  isLoading: boolean;
}


export const Panel: FC<IPanel> = ({ isLoading }) => {
  const { isAuthUser, handlerOffAuthUser } = useAppAuthContext();
  const navigate = useNavigate();

  const handlerClickOffAuthUser = () => {
    handlerOffAuthUser();
    navigate('/login');
  };

  return (
    <Styled.PanelWrapper>
      <Styled.PanelHeader>

        <Styled.PanelExitButton onClick={ handlerClickOffAuthUser }>
          { isAuthUser?.username }
          <Styled.PanelIconExit />
        </Styled.PanelExitButton>

      </Styled.PanelHeader>
      <Styled.PanelMenuWrapper>

        { !isLoading ? (
          <Styled.PanelMenuItem to="/skypro-music/category/1">
            <img
              alt=""
              src={ `${process.env.PUBLIC_URL}/assets/img/item1.png` }
            />
          </Styled.PanelMenuItem>
        ) : (
          <Styled.PanelItemSkeleton />
        ) }

        { !isLoading ? (
          <Styled.PanelMenuItem to="/skypro-music/category/2">
            <img
              alt=""
              src={ `${process.env.PUBLIC_URL}/assets/img/item2.png` }
            />
          </Styled.PanelMenuItem>
        ) : <Styled.PanelItemSkeleton /> }

        { !isLoading ? (
          <Styled.PanelMenuItem to="/skypro-music/category/3">
            <img
              alt=""
              src={ `${process.env.PUBLIC_URL}/assets/img/item3.png` }
            />
          </Styled.PanelMenuItem>
        ) : <Styled.PanelItemSkeleton /> }

      </Styled.PanelMenuWrapper>
    </Styled.PanelWrapper>
  );
};
