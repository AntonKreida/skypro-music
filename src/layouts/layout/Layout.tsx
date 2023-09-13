import { Outlet } from 'react-router-dom';

import { Search } from '@shared/';
import { Sidebar, Panel, AudioPlayer } from '@components/';

import * as Styled from './Layout.styled';


export const Layout = () => (
  <Styled.LayoutWrapper>
    <Sidebar />
    <Styled.LayoutMainContainer>
      <Search />
      <Outlet />
    </Styled.LayoutMainContainer>
    <Panel />
    <AudioPlayer />
  </Styled.LayoutWrapper>
);
