import * as Styled from './Sidebar.styled';
import { NavMenu } from './ui/nav-menu';


export const Sidebar = () => (
  <Styled.SidebarWrapper>
    <Styled.SidebarLogoWrapperLink to="/skypro-music">
      <Styled.SidebarLogo />
    </Styled.SidebarLogoWrapperLink>
    <Styled.SidebarNavMenuWrapper>
      <NavMenu />
    </Styled.SidebarNavMenuWrapper>
  </Styled.SidebarWrapper>
);
