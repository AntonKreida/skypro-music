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
    background: #313131;
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
        background: #4B4949;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 10px;
    }
`;

export const FilterDropdownItem = styled.div`
    font-family: "Stratos-Light";
    font-size: 20px;
    color: #fff;
    transition: all 0.1s linear;
    cursor: pointer;

    &:hover {
        color: #D9B6FF;
    }

    .active {
        color: #AD61FF;
        text-decoration: underline;
    }
`;
