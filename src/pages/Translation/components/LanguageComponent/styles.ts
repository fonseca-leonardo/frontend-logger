import styled from 'styled-components';

export const TranslationContainer = styled.div`
    background: ${({ theme }) => theme.card.solidBackground};
    box-shadow: ${({ theme }) => theme.card.boxShadow};
    border-radius: 8px;
    flex: 1;

    @media (max-width: 900px) {
        height: 400px;
        margin-right: 54px;
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

export const BookMarkerContainer = styled.div`
    position: relative;
    flex: 1;

    @media (max-width: 900px) {
        height: 400px;
        margin-bottom: 54px;
    }
`;
