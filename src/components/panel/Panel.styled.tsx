import styled from 'styled-components';


export const PanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100%;
`;

export const PanelHeader = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
`;

export const PanelIconWrapper = styled.div`
    width: fit-content;
    height: fit-content;

    & > svg {
        width: 40px;
        height: 40px;
    }
`;

export const PanelMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 60px;
`;

export const PanelMenuItem = styled.div`
    width: 100%;
    height: fit-content;

    & > img {
        object-fit: fill;
    }

`;
