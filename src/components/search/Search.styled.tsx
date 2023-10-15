import styled from 'styled-components';

import { ReactComponent as Search } from '@assets/icon/Search.svg';


export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    height: 50px;
    margin-bottom: 51px;
    padding: 0px 10px 14px 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.tundora};
`;

export const SearchIcon = styled(Search)`
    width: 15px;
    height: 15px;
    stroke: ${({ theme }) => theme.colors.default};
    fill: ${({ theme }) => theme.colors.default};
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    font-family: "Stratos-Regular";
    font-size: 16px; 
    color: ${({ theme }) => theme.colors.default};
    background: none;

    &::placeholder {
        font-family: "Stratos-Regular";
        font-size: 16px;
        color: ${({ theme }) => theme.colors.default};  
    }

    &:focus {
        outline: none;
    }
`;
