import styled from 'styled-components';
import { FieldError } from 'react-hook-form';


export const InputLabelWrapper = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`;

export const InputWrapper = styled.input<{error: FieldError | null}>`
    width: 100%;
    height: 30px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid ${({ error }) => (error ? '#d91818' : '#D0CECE')};
    font-family: "Stratos-Regular";
    font-size: 18px;
    color: #000;

    &:focus {
        outline: none;
    }

    &::placeholder {
        font-family: "Stratos-Regular";
        font-size: 18px;
        color: #E1E1E1;
    }
`;

export const InputErrorMessageWrapper = styled.div`
    font-family: "Stratos-Light";
    font-size: 10px;
    color: #d91818;
`;
