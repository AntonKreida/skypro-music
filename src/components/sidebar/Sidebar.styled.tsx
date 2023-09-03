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
    padding: 35px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.godGray};
`;

export const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SidebarLogoWrapperLink = styled(NavLink)``;

export const SidebarLogo = styled(Logo)`
    width: fit-content;
    height: 20px;
`;

export const SidebarNavMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 26px;
`;

export const SidebarIconThemeButton = styled.button`
    width: 39px;
    height: 39px;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        width: 100%;
        height: 100%;
    }
`;
