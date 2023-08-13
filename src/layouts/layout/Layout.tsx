import { FC, ReactNode } from 'react';

import { Search } from '@shared/';
import { Sidebar } from '@components/';

import * as Styled from './Layout.styled';


interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => (
  <Styled.LayoutWrapper>
    <Sidebar />
    <Styled.LayoutMainContainer>
      <Search />
      { children }
    </Styled.LayoutMainContainer>
  </Styled.LayoutWrapper>
);
