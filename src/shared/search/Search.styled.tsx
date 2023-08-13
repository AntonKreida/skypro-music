import styled from 'styled-components';

import { ReactComponent as Search } from '@assets/icon/Search.svg';


export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    height: 50px;
    padding: 5px 10px 14px 10px;
    border-bottom: 1px solid #4E4E4E;
`;

export const SearchIcon = styled(Search)`
    width: 15px;
    height: 15px;
    stroke: #fff;
    fill: #fff;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    font-family: "StratosSkyeng";
    font-size: 16px;
    font-style: normal;
    font-weight: normal;  
    color: #fff;
    background: none;

    &::placeholder {
        font-family: "StratosSkyeng";
        font-size: 16px;
        font-style: normal;
        font-weight: normal;
        color: #fff;  
    }

    &:focus {
        outline: none;
    }
`;
