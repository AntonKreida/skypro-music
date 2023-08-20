import styled from 'styled-components';


export const TableItemRowWrapper = styled.tr`
    display: flex;
    align-items: center;
    width: 100%;
    height: fit-content;

    & > td:nth-child(1) {
        max-width: 447px;
        width: 100%;
    }

    & > td:nth-child(2) {
        max-width: 216px;
        width: 100%;
    }

    & > td:nth-child(3) {
        max-width: 230px;
        width: 100%;
    }

    & > td:nth-child(4) {
        justify-content: end;
        max-width: 100px;
        width: 100%;
        text-align: end;
    }
`;


export const TableItemCell = styled.td`
    display: flex;
    align-items: center;
    gap: 17px;
    width: 100%;
`;

export const TableItemIconWrapper = styled.div`
    width: fit-content;
    height: 100%;

    & > svg {
        width: 51px;
        height: 51px;
    }
`;

export const TableItemText = styled.p`
    font-family: "Stratos-Light";
    font-size: 16px;
    color: #fff;
`;

export const TableItemTextSilenced = styled.p`
    font-family: "Stratos-Light";
    font-size: 16px;
    color: #4E4E4E;
`;

export const TableLikeWrapper = styled.div`
    width: fit-content;
    height: 100%;

    & > svg {
        width: 17px;
        height: 13px;
    }
`;
