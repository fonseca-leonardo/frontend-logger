import styled, { css } from 'styled-components';
import { Field } from 'formik';
import { transparentize } from 'polished';

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
    height: 18px;
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

export const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const Backdrop = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    height: 100%;
`;

export const DialogContainer = styled.div`
    box-shadow: ${({ theme }) => theme.card.boxShadow};
    background: ${({ theme }) => theme.card.solidBackground};

    padding: 16px 24px;
    border-radius: 8px;

    width: 100%;
    max-width: 400px;

    margin: 0px 16px;

    margin-bottom: 64px;
`;

export const DialogTitleContainer = styled.div`
    h3 {
        font-size: 18px;
    }
`;

export const DialogBodyContainer = styled.div`
    display: flex;
    flex-direction: column;

    min-height: 200px;
    max-height: 200px;
    overflow-y: auto;

    & ${Radio}:first-child {
        margin-top: 0px;
    }

    ${Radio} {
        margin-top: 12px;
    }
`;

export const DialogActionContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    button {
        color: white;

        border: none;

        text-transform: uppercase;

        padding: 8px 12px;

        transition: 0.25s all;

        border-radius: 8px;
    }

    button:hover {
        cursor: pointer;
    }

    button:first-child {
        background: inherit;
        color: ${({ theme }) => theme.fontColor};
    }

    button:first-child:hover {
        background: ${({ theme }) => theme.lightColor};
    }

    button:last-child {
        background: inherit;
        color: ${({ theme }) => theme.button.background};
    }

    button:last-child:hover {
        background: ${({ theme }) =>
            transparentize(0.8, theme.button.background || '')};
    }
`;

export const StyledField = styled(Field)``;
