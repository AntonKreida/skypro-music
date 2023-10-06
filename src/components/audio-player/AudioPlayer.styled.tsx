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


export const AudioPlayerWrapper = styled.div<{$isLoading: boolean}>`
    position: fixed;
    left: 0;
    bottom: 0;
    display: ${({ $isLoading }) => ($isLoading ? 'none' : 'flex')};
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 73px;
    padding: 10px 36px 5px 36px;
    background: ${({ theme }) => theme.colors.godGrayOpacity};
`;

export const AudioPlayerControllerWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const AudioPlayerPanel = styled.div`
    display: flex;
    align-items: center;
    gap: 33px;
`;

export const AudioPlayerButton = styled.button`
    position: relative;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    border: none;
    background: none;

    & > svg {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
    }

    & > .volume > path {
        stroke: ${({ theme }) => theme.colors.mercury};
        fill:  ${({ theme }) => theme.colors.mercury};
    }

    &:hover > svg > path, 
    &:hover > svg > rect,
    &:hover > svg > g > path:last-child {
        fill: #696969;
    }

    &:hover > svg > g > path:first-child {
        stroke: #696969;
    }

    &:active > svg > path, 
    &:active > svg > rect,
    &:active > svg > g > path:last-child {
        fill: #D9D9D9;
    }

    &:active > svg > g > path:first-child {
        stroke: #D9D9D9;
    }
`;

export const AudioPlayerButtonControl = styled.button<{$isLoop: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    border: none;
    background: none;

    & > svg {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
    }


    &:hover > svg > g > path {
        fill: #ACACAC;
    }

    &:active > svg > g > path {
        fill: #e3e3e3;
    }

    & > svg > g > path {
        fill: ${({ $isLoop }) => ($isLoop ? '#ffffff' : '#696969')};
    }
`;

export const AudioPlayerButtonVolume = styled(AudioPlayerButton)<{$isVolume: boolean}>`
    &::before {
        content: "";
        display: ${({ $isVolume }) => ($isVolume ? 'none' : 'block')};
        position: absolute;
        left: 50%;
        top: 50%;
        width: 2px;
        height: 130%;
        border-radius: 10px;
        background: ${({ theme }) => theme.colors.blackAndWithe};
        transform:translate(-50%, -50%) rotate(45deg);
    }

    &:hover:before {
        background: #696969;
    }

    &:active::before {
        background: #e3e3e3;
    }
`;

export const AudioPlayerButtonCase = styled.button<{$isRandom: boolean}>`
    position: relative;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    border: none;
    background: none;

    &:hover > svg > g > path {
        stroke: #696969;
        fill: #696969;
    }

    &:active > svg > g > path {
        stroke: #D9D9D9;
        fill: #D9D9D9;
    }


    & > svg {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
    }

    & > svg > g > path {
        fill: ${({ $isRandom }) => ($isRandom ? '#ffffff' : '#696969')};
        stroke: ${({ $isRandom }) => ($isRandom ? '#ffffff' : '#696969')};
    }
`;

export const AudioPlayerInfoWrapper = styled.div`
    display: flex;
    gap: 5px;
`;

export const AudioPlayerInfoIconWrapper = styled.div`
    width: 51px;
    height: 51px;
    background: ${({ theme }) => theme.colors.gray};
`;

export const AudioPlayerInfoIconPlug = styled(Plug)`
    width: 100%;
    height: 100%;

    & > g > rect {
        fill: ${({ theme }) => theme.colors.doveGray};
    }
`;

export const AudioPlayerInfoImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const AudioPlayerInfoTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

export const AudioPlayerInfoText = styled.div`
    height: 15px;
    width: fit-content;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.default};
`;

export const AudioPlayerInputRange = styled.input.attrs({ type: 'range' })`
    display: block;
    appearance: none;
    max-width: 130px;
    width: 100%;
    height: 4px;
    border-radius: 15px;
    outline: none;
    background: ${({ value, theme }) => `
    linear-gradient(to right, 
    ${theme.colors.perfume} 0%,
    ${theme.colors.perfume} ${value}%,
    ${theme.colors.emperor} ${value}%,
    ${theme.colors.emperor} 100%);
    )`
};

    &::-webkit-slider-thumb  {
        position: relative;
        appearance: none;
        position: relative;
        height: 15px;
        width: 15px;
        background: ${({ theme }) => theme.colors.bonJour};
        border-radius: 100%;
        border: 3px solid ${({ theme }) => theme.colors.mercury};
        cursor: pointer;
    }
`;

export const AudioPlayerInfoIconSkeleton = styled.div`
    width: 51px;
    height: 51px;
    background: linear-gradient(-45deg, #313131, #6b6b6b);
    background-size: 400% 400%;
    animation: ${gradient} 1s ease infinite;
`;

export const AudioPlayerInfoTextSkeleton = styled.div`
    height: 15px;
    width: 50px;
    background: linear-gradient(-45deg, #313131, #6b6b6b);
    background-size: 400% 400%;
    animation: ${gradient} 1s ease infinite;
`;
