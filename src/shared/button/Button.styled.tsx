import styled from 'styled-components';


export const ButtonWrapper = styled.button<{active?: boolean}>`
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.default};
    border-radius: 60px;
    padding: 6px 20px;
    font-family: "Stratos-Regular";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.default};
    background: none;
    transition: all 0.1s linear;

    &:hover {
        border-color: ${({ theme }) => theme.colors.mauve};
        color: ${({ theme }) => theme.colors.mauve};
    }

    &.active {
        border-color: ${({ theme }) => theme.colors.heliotrope};
        color: ${({ theme }) => theme.colors.heliotrope};
    }
`;

export const ButtonWrapperDefault = styled.button<{$color: 'default' | 'purple'}>`
    width: 100%;
    padding: 12px 0px;
    border: ${({ $color }) => ($color === 'default' ? ' 1px solid #D0CECE' : 'none')};
    border-radius: 6px;
    font-family: "Stratos-Regular";
    font-size: 18px;
    text-align: center;
    color: ${({ $color }) => ($color === 'default' ? '#000' : '#fff')};
    background: ${({ $color }) => ($color === 'default' ? '#fff' : '#580EA2')};
    transition: all 0.1s linear;

    
    &:hover {
        background: ${({ $color }) => ($color === 'default' ? '#D0CECE' : '#3F007D')};
    }

    &:active {
        background: ${({ $color }) => ($color === 'default' ? '#D9D9D9' : '#271A58')};
        transform: scale(0.9);
    }

    &:disabled {
        color: #898989;
        background: #898989;
        cursor: default;
    }
`;
