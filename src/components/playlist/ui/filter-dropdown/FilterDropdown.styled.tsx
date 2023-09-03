import styled from 'styled-components';


export const FilterDropdownWrapper = styled.div`
    position: relative;
    left: 0;
    top: 0;
    width: fit-content;
`;

export const FilterDropdownMenuWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 45px;
    width: 237px;
    height: 237px;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.gray};
`;

export const FilterDropdownMenuInner = styled.div`
    width: 100%;
    height: 100%;
    padding: 34px;
`;

export const FilterDropdownMenuBox = styled.div`
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

export const FilterDropdownItem = styled.div`
    font-family: "Stratos-Light";
    font-size: 20px;
    color: ${({ theme }) => theme.colors.default};
    transition: all 0.1s linear;
    cursor: pointer;

    &:hover {
        color:  ${({ theme }) => theme.colors.mauve};
    }

    .active {
        color: ${({ theme }) => theme.colors.heliotropeWhite};;
        text-decoration: underline;
    }
`;
