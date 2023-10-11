import styled, { keyframes, css } from 'styled-components';

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

const pulse = keyframes`
    0% {
        transform: scale(0.8);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0.8);
    }
`;


export const TableItemRowWrapper = styled.tr`
    width: 100%;
    height: fit-content;
    cursor: pointer;
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

export const TableItemWrapperImg = styled.div`
    position: relative;
    left: 0;
    top: 0;
    width: 51px;
    height: 51px;
`;

export const TableCurrentTrack = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: #000;
`;

export const TableCurrentTrackPulse = styled.div<{$isCurrentTrack: boolean; $isPlay: boolean}>`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.heliotrope};
    ${({ $isCurrentTrack, $isPlay }) => $isCurrentTrack && $isPlay && css`animation: ${pulse} 1s ease infinite;`};
`;

export const TableItemIconPlug = styled(Plug)`
    width: 100%;
    height: 100%;

    & > g > rect {
        fill: ${({ theme }) => theme.colors.doveGray};
    }
`;

export const TableItemImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
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
