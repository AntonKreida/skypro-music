import styled from 'styled-components';

import { ReactComponent as Clock } from '@assets/icon/Clock.svg';


export const PlaylistWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
    width: 100%;
    height: 100%;
`;

export const PlaylistTitle = styled.h1`
    font-family: "Stratos-Regular";
    font-size: 60px;
    color: #fff;
`;

export const PlaylistTableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const PlaylistTableFilter = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    font-family: "Stratos-Medium";
    font-size: 16px;
    color: #fff;
`;

export const PlaylistTable = styled.table`
    width: 100%;
    height: 100%;
    margin-top: 50px;
    overflow-y: auto;
`;

export const PlaylistTableHeader = styled.thead`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
`;

export const PlaylistTableRow = styled.tr`
    display: flex;
    align-items: center;
    width: 100%;
    height: fit-content;

    & > th:nth-child(1), 
    & > td:nth-child(1) {
        max-width: 447px;
        width: 100%;
    }

    & > th:nth-child(2),
    & > td:nth-child(2) {
        max-width: 216px;
        width: 100%;
    }

    & > th:nth-child(3),
    & > td:nth-child(3) {
        max-width: 230px;
        width: 100%;
    }

    & > th:nth-child(4),
    & > td:nth-child(4) {
        justify-content: end;
        max-width: 100px;
        width: 100%;
        text-align: end;
    }
`;

export const PlaylistTableHeaderTitle = styled.th`
    font-family: "Stratos-Light";
    font-size: 14px;
    text-align: left;
    color: #4E4E4E;
    text-transform: uppercase;
`;

export const PlaylistTableIcon = styled(Clock)`
    width: 15px;
    height: 15px;
    stroke: #4E4E4E;
`;

export const PlaylistTableBody = styled.tbody`
    width: 100%;
    height: 100%;
`;

export const PlaylistTableCell = styled.td`
    display: flex;
    align-items: center;
    gap: 17px;
    width: 100%;
`;

export const PlaylistItemIconWrapper = styled.div`
    width: fit-content;
    height: 100%;

    & > svg {
        width: 51px;
        height: 51px;
    }
`;

export const PlaylistItemText = styled.p`
    font-family: "Stratos-Light";
    font-size: 16px;
    color: #fff;
`;

export const PlaylistItemTextSilenced = styled.p`
    font-family: "Stratos-Light";
    font-size: 16px;
    color: #4E4E4E;
`;

export const PlaylistLikeWrapper = styled.div`
    width: fit-content;
    height: 100%;

    & > svg {
        width: 17px;
        height: 13px;
    }
`;
