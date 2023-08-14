import { FC, ReactNode } from 'react';

import { Search } from '@shared/';
import { Sidebar, Panel } from '@components/';

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
    <Panel />
  </Styled.LayoutWrapper>
);
