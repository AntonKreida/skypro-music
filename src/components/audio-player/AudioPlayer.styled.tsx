import styled, { keyframes } from 'styled-components';


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

export const AudioPlayerProgress = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 5px;
    background: ${({ theme }) => theme.colors.gray};
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

    & > .volume {
        stroke: ${({ theme }) => theme.colors.mercury};
        fill:  ${({ theme }) => theme.colors.mercury};
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
