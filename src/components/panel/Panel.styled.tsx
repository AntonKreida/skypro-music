import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Exit } from '@assets/icon/Exit.svg';


const gradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;


export const PanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100%;
    padding: 35px 35px 35px 0px;
`;

export const PanelHeader = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
`;

export const PanelIconWrapper = styled(Exit)`
    width: 40px;
    height: 40px;

    & > g > g > path {
        stroke: ${({ theme }) => theme.colors.default}
    }

    & > g > circle {
        stroke: ${({ theme }) => theme.colors.default};
    }
`;

export const PanelMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 60px;
`;

export const PanelMenuItem = styled(NavLink)`
    width: 100%;
    height: fit-content;

    & > img {
        object-fit: fill;
    }

`;

export const PanelItemSkeleton = styled.div`
    width: 100%;
    height: 150px;
    background: linear-gradient(-45deg, #313131, #6b6b6b);
    background-size: 400% 400%;
    animation: ${gradient} 1s ease infinite;
`;
