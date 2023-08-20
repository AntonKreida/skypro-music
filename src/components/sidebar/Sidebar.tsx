import * as Styled from './Sidebar.styled';
import { NavMenu } from './ui/nav-menu';


export const Sidebar = () => (
  <Styled.SidebarWrapper>
    <Styled.SidebarLogo />
    <Styled.SidebarNavMenuWrapper>
      <NavMenu />
    </Styled.SidebarNavMenuWrapper>
  </Styled.SidebarWrapper>
);
