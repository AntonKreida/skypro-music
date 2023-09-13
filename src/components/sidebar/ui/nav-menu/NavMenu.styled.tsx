import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Burger } from '@assets/icon/Burger.svg';
import { ReactComponent as Cross } from '@assets/icon/Cross.svg';


export const NavMenuWrapper = styled.div`
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
`;

export const NavMenuButton = styled.button`
    border: none;
    background: none;
`;

export const NavMenuBurgerIcon = styled(Burger)`
    width: 20px;
    height: 10px;
    cursor: pointer;

    & > path {
        stroke: ${({ theme }) => theme.colors.default};
    }
`;

export const NavMenuCrossIcon = styled(Cross)`
    width: 20px;
    height: 10px;
    fill: ${({ theme }) => theme.colors.default};
    cursor: pointer;
`;

export const NavMenuDropdown = styled(motion.div)`
    position: absolute;
    left: 0;
    top: 40px;
    display: flex;
    flex-direction: column;
    gap: 26px;
    width: 100px;
    height: 112px;
    overflow: hidden;
`;

export const NavMenuItem = styled(NavLink)`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.default};
    cursor: pointer;
    transition: color 0.2s linear;

    &:hover {
        color: ${({ theme }) => theme.colors.mauve};
    }

    &.active {
        color: ${({ theme }) => theme.colors.heliotrope};
        text-decoration: underline;
    }
`;
