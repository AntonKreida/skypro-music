import styled from 'styled-components';


export const MenuDropdownWrapper = styled.div`
    position: relative;
    left: 0;
    top: 0;
    width: fit-content;
`;

export const MenuDropdownMenuWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 45px;
    width: 237px;
    height: 237px;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.gray};
`;

export const MenuDropdownMenuInner = styled.div`
    width: 100%;
    height: 100%;
    padding: 34px;
`;

export const MenuDropdownMenuBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    width: 100%;
    height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background:  ${({ theme }) => theme.colors.doveGray};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.default};
        border-radius: 10px;
    }
`;

export const MenuDropdownItem = styled.div<{$isInclined?: boolean}>`
    font-family: "Stratos-Light";
    font-size: 20px;
    color: ${({ theme, $isInclined }) => ($isInclined ? theme.colors.heliotropeWhite : theme.colors.default)};
    text-decoration: ${({ $isInclined }) => ($isInclined ? 'underline' : 'none')};
    transition: all 0.1s linear;
    cursor: pointer;

    &:hover {
        color:  ${({ theme }) => theme.colors.mauve};
    }
`;

export const MenuDropdownCounter = styled.div`
    position: absolute;
    top: -12px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.heliotrope};
`;
