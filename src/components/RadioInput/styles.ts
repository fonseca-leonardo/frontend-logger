import { Field } from 'formik';
import styled, { css } from 'styled-components';

export const RadioInput = styled.span`
    display: flex;

    & > input {
        opacity: 0;
        width: 0;
        height: 0;
    }
`;

interface RadioControlProps {
    selected: boolean;
}

export const RadioControl = styled.span<RadioControlProps>`
    width: 18px;
    height: auto;
    border-radius: 50%;
    border: 1px solid currentColor;
    background: inherit;
    transition: 0.2s border ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;

    ${({ theme }) => css`
        &::after {
            content: '';
            display: inline-block;
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background: ${theme.button.background};
            padding: 0;
            margin: 0;
            transition: 0.2s opacity ease-in;
            &::after {
                opacity: 0;
            }
        }
    `}

    ${({ selected, theme }) =>
        selected
            ? css`
                  &::after {
                      opacity: 1;
                  }

                  border: 1px solid ${theme.button.background};
              `
            : css`
                  &::after {
                      opacity: 0;
                  }
              `}
`;

export const RadioLabel = styled.span`
    line-height: 1;
    text-align: center;
    vertical-align: bottom;
    font-size: 20px;
    margin-left: 8px;
`;

export const Radio = styled.label`
    display: flex;
    align-items: center;

    width: fit-content;

    &:hover {
        cursor: pointer;
    }
`;

export const StyledField = styled(Field)``;
