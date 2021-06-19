import styled from 'styled-components';

import { Field } from 'formik';

export const ErrorMessage = styled.span`
    color: red;

    margin-top: 4px;
`;

export const StyledInput = styled(Field)`
    border: none;

    font-family: Nunito;

    font-weight: 500;

    font-size: 16px;

    padding: 10px;

    outline: none;

    color: ${({ theme }) => theme.input.color};

    background: inherit;

    border-bottom: 1px solid ${({ theme }) => theme.input.borderColor};

    transition: 0.5s ease all;
`;
