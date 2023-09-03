import { ReactComponent as Dark } from '@assets/icon/Dark.svg';
import { ReactComponent as Light } from '@assets/icon/Light.svg';
import { useAppThemeContext } from '@hook/';

import * as Styled from './Sidebar.styled';
import { NavMenu } from './ui/nav-menu';


export const Sidebar = () => {
  const { handlerSwitchTheme, currentTheme } = useAppThemeContext();


  return (
    <Styled.SidebarWrapper>

      <Styled.SidebarHeader>
        <Styled.SidebarLogoWrapperLink to="/skypro-music">
          <Styled.SidebarLogo />
        </Styled.SidebarLogoWrapperLink>

        { currentTheme.name === 'dark' && (
          <Styled.SidebarIconThemeButton onClick={ () => handlerSwitchTheme('light') }>
            <Dark />
          </Styled.SidebarIconThemeButton>
        ) }
        { currentTheme.name === 'light' && (
          <Styled.SidebarIconThemeButton onClick={ () => handlerSwitchTheme('dark') }>
            <Light />
          </Styled.SidebarIconThemeButton>
        ) }
      </Styled.SidebarHeader>

      <Styled.SidebarNavMenuWrapper>
        <NavMenu />
      </Styled.SidebarNavMenuWrapper>
    </Styled.SidebarWrapper>
  );
};
