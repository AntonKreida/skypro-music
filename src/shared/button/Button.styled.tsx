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
