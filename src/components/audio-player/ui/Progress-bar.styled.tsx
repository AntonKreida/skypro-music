import styled from 'styled-components';


export const ProgressBarWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 5px;
    background: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
`;


export const ProgressBarBand = styled.div<{$progress: number}>`
    position: absolute;
    left: 0;
    top: 0;
    width: ${({ $progress }) => `${$progress}%`};
    height: 5px;
    background: ${({ theme }) => theme.colors.heliotropeWhite};
`;
