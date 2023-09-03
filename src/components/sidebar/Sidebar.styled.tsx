import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '@assets/icon/Logo.svg';


export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 46px;
    max-width: 300px;
    width: 100%;
    height: 100vh;
`;

export const SidebarLogoWrapperLink = styled(NavLink)``;

export const SidebarLogo = styled(Logo)`
    width: fit-content;
    height: 20px;
`;

export const SidebarNavMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
