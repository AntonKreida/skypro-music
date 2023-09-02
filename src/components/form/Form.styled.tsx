import styled from 'styled-components';

import { ReactComponent as Logo } from '@assets/icon/Logo.svg';


export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 366px;
    width: 100%;
    height: 439px;
    border-radius: 12px;
    padding: 41px 47px;
    background: #fff;
`;

export const FormLogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 42px;
`;

export const FormLogo = styled(Logo)`
    stroke: #000;
    
    & > path:nth-child(n + 3) {
        fill: #000;
    }
`;

export const FormPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 38px;
    width: 100%;
    margin-bottom: 60px;
`;

export const FormButtonPanel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;
