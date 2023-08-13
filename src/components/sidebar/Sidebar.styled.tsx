import styled from 'styled-components';

import { ReactComponent as Logo } from '@assets/icon/Logo.svg';
import { ReactComponent as Burger } from '@assets/icon/Burger.svg';


export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 46px;
    max-width: 300px;
    width: 100%;
    height: 100vh;
    padding: 36px;
`;

export const SidebarLogo = styled(Logo)`
    width: fit-content;
    height: 20px;
`;

export const SidebarNavMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SidebarBurgerIcon = styled(Burger)`
    width: 20px;
    height: 10px;
`;
