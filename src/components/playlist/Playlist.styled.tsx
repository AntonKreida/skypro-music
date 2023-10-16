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
    color: ${({ theme }) => theme.colors.default};
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
    color: ${({ theme }) => theme.colors.default};
`;

export const PlaylistTableBox = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 25px;
    padding-bottom: 150px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const PlaylistTable = styled.table`
    width: 100%;
    margin-bottom: 90px;
`;

export const PlaylistTableHeader = styled.thead`
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
`;

export const PlaylistTableRow = styled.tr`
    width: 100%;
    height: fit-content;
`;

export const PlaylistTableHeaderTitle = styled.th`
    font-family: "Stratos-Light";
    font-size: 14px;
    text-align: left;
    color: ${({ theme }) => theme.colors.tundora};
    text-transform: uppercase;
`;

export const PlaylistTableLastHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const PlaylistTableIcon = styled(Clock)`
    width: 15px;
    height: 15px;
    stroke: ${({ theme }) => theme.colors.tundora};
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
    color: ${({ theme }) => theme.colors.default};
`;

export const PlaylistItemTextSilenced = styled.p`
    font-family: "Stratos-Light";
    font-size: 16px;
    color: ${({ theme }) => theme.colors.tundora};
`;

export const PlaylistLikeWrapper = styled.div`
    width: fit-content;
    height: 100%;

    & > svg {
        width: 17px;
        height: 13px;
    }
`;

export const PlaylistErrorHolder = styled.tr`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Stratos-Light";
    font-size: 32px;
    text-align: center;
    color: ${({ theme }) => theme.colors.blackAndWithe};
`;
