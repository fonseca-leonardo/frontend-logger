import { transparentize } from 'polished';
import styled from 'styled-components';

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

export const DialogBodyContainer = styled.div``;

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
