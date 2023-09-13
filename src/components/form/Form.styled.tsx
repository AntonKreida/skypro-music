import styled from 'styled-components';

import { ReactComponent as Logo } from '@assets/icon/Logo.svg';


export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 366px;
    width: 100%;
    height: auto;
    border-radius: 12px;
    padding: 41px 47px;
    border: 1px solid #000;
    background: #fff;
`;

export const FormLogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 42px;
`;

export const FormLogo = styled(Logo)`
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

export const FormSubmitErrorMessage = styled.div`
    width: 100%;
    font-family: "Stratos-Light";
    font-size: 16px;
    color: #d91818;
    text-align: center;
`;
