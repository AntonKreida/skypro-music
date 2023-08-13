import { FC, ReactNode } from 'react';

import { Sidebar } from '@components/';

import * as Styled from './Layout.styled';


interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => (
  <Styled.LayoutWrapper>
    <Sidebar />
    { children }
  </Styled.LayoutWrapper>
);
