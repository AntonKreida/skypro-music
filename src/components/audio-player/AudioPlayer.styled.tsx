import styled from 'styled-components';


export const AudioPlayerWrapper = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 73px;
    padding: 10px 36px 5px 36px;
    background: #1c1c1c7f;
`;

export const AudioPlayerProgress = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 5px;
    background: #2E2E2E;
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
        stroke: #fff;
        fill: #fff;
    }
`;

export const AudioPlayerInfoWrapper = styled.div`
    display: flex;
    gap: 5px;
`;

export const AudioPlayerInfoIconWrapper = styled.div`
    width: 51px;
    height: 51px;
    background: #2E2E2E;
`;

export const AudioPlayerInfoTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
`;

export const AudioPlayerInfoText = styled.div`
    height: 15px;
    width: 50px;
    background: #2E2E2E;
`;

export const AudioPlayerInputRange = styled.input`
    accent-color: #fff;
`;
