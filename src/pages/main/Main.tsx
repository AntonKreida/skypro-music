import { ReactNode, FC } from 'react';

import * as Styled from './Main.styled';


interface IMainPageProps {
  children: ReactNode;
}


export const MainPage: FC<IMainPageProps> = ({ children }) => (
  <Styled.MainWrapper>{ children }</Styled.MainWrapper>
);
