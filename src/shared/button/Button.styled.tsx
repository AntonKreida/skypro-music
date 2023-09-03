import styled from 'styled-components';


export const ButtonWrapper = styled.button<{active?: boolean}>`
    display: flex;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 60px;
    padding: 6px 20px;
    font-family: "Stratos-Regular";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: #fff;
    background: none;
    transition: all 0.1s linear;

    &:hover {
        border-color: #D9B6FF;
        color: #D9B6FF;
    }

    &.active {
        border-color: #AD61FF;
        color: #AD61FF;
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
`;
