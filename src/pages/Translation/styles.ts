import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TitleActionsContainer = styled.div`
    display: flex;
    align-items: center;

    & > button {
        width: 152px;
        box-shadow: none;
        margin-right: 32px;
    }
`;

export const TranslationContainer = styled.div`
    background: ${({ theme }) => theme.card.solidBackground};
    box-shadow: ${({ theme }) => theme.card.boxShadow};
    border-radius: 8px;
    min-width: 380px;

    form {
        display: flex;
        flex-direction: column;
    }

    button {
        width: 90%;
        align-self: center;
    }

    h2 {
        text-transform: uppercase;
        padding: 12px 24px;
    }

    input {
        box-shadow: none;
        border-bottom: 1px solid ${({ theme }) => theme.input.borderColor};
        border-radius: 0px;
        width: 100%;
        padding-bottom: 4px;
    }

    hr {
        margin: 24px 0px;
    }
`;

export const DefaultTranslationContainer = styled.div`
    background: ${({ theme }) => theme.card.solidBackground};
    box-shadow: ${({ theme }) => theme.card.boxShadow};
    border-radius: 8px;
    flex: 1;

    @media (max-width: 900px) {
        height: 400px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    button {
        width: 90%;
        align-self: center;
    }

    h2 {
        text-transform: uppercase;
        padding: 12px 24px;
    }

    input {
        box-shadow: none;
        border-bottom: 1px solid ${({ theme }) => theme.input.borderColor};
        border-radius: 0px;
        width: 100%;
        padding-bottom: 4px;
    }

    hr {
        margin: 24px 0px;
    }
`;

export const BookMarkContainer = styled.div`
    position: absolute;
    top: 24px;
    right: -36px;
    z-index: -1;
`;

export const Container = styled.div`
    display: flex;
    padding: 0px 0px 8px 0px;

    @media (max-width: 900px) {
        flex-direction: column;
    }

    width: 100%;

    & > div {
        position: relative;
    }
`;
