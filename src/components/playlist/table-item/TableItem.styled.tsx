import styled, { keyframes } from 'styled-components';

import { ReactComponent as Plug } from '@assets/icon/Plug.svg';


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


export const TableItemRowWrapper = styled.tr`
    width: 100%;
    height: fit-content;
`;


export const TableItemCell = styled.td`
    width: fit-content;
`;

export const TableItemBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const TableItemLastBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const TableItemIconPlug = styled(Plug)`
    width: 51px;
    height: 51px;

    & > g > rect {
        fill: ${({ theme }) => theme.colors.doveGray};
    }
`;

export const TableItemText = styled.p`
    font-family: "Stratos-Light";
    font-size: 16px;
    color: ${({ theme }) => theme.colors.default};
`;

export const TableItemTextSilenced = styled.p`
    font-family: "Stratos-Light";
    font-size: 16px;
    color: ${({ theme }) => theme.colors.tundora};
`;

export const TableLikeWrapper = styled.div`
    width: fit-content;
    height: 100%;

    & > svg {
        width: 17px;
        height: 13px;
    }
`;

export const TableItemIconSkeleton = styled.div`
    width: 60px;
    height: 51px;
    background: linear-gradient(-45deg, #313131, #6b6b6b);
    background-size: 400% 400%;
    animation: ${gradient} 1s ease infinite;
`;

export const TableItemTextSkeleton = styled.div`
    width: 100%;
    height: 15px;
    margin: 0 5px;
    background: linear-gradient(-45deg, #313131, #6b6b6b);
    background-size: 400% 400%;
    animation: ${gradient} 1s ease infinite;
`;
