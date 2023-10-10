import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Search } from '@shared/';
import { Sidebar, Panel, AudioPlayer } from '@components/';

import * as Styled from './Layout.styled';


export const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);


  return (
    <Styled.LayoutWrapper>
      <Sidebar />
      <Styled.LayoutMainContainer>
        <Search />
        <Outlet context={{ setIsLoading }} />
      </Styled.LayoutMainContainer>
      <Panel isLoading={ isLoading } />
      <AudioPlayer />
    </Styled.LayoutWrapper>
  );
};
