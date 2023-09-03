import styled from 'styled-components';

import { ReactComponent as Crying } from '@assets/icon/Crying.svg';


export const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-family: 'Stratos-Regular';
    color: #fff;
`;

export const NotFoundNumberText = styled.div`
    margin-bottom: 3px;
    font-size: 160px;
    text-align: center;
`;

export const NotFoundTitleWrapper = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 9px;
`;

export const NotFoundTitle = styled.div`
    font-size: 32px;
`;

export const NotFoundIcon = styled(Crying)`
    width: 52px;
    height: 52px;
`;

export const NotFoundSubtitle = styled.div`
    margin-bottom: 36px;
    font-size: 18px;
    text-align: center;
    color: #4E4E4E;
`;

export const NotFoundButtonWrapper = styled.div`
    max-width: 278px;
    width: 100%;
`;
