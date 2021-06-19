import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;
`;

export const TranslationContainer = styled.div`
    background: ${({ theme }) => theme.card.solidBackground};
    box-shadow: ${({ theme }) => theme.card.boxShadow};
    padding: 12px 24px;
    border-radius: 8px;
    min-width: 380px;
    h2 {
        text-transform: uppercase;
    }
`;

export const BookMarkContainer = styled.div`
    position: absolute;
    top: 24px;
    right: -36px;
    z-index: -1;
`;

export const DefaultTranslationContainer = styled.div`
    background: ${({ theme }) => theme.card.solidBackground};
    box-shadow: ${({ theme }) => theme.card.boxShadow};
    padding: 12px 24px;
    overflow-y: auto;
    border-radius: 8px;
    min-width: 380px;

    h2 {
        text-transform: uppercase;
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

export const Container = styled.div`
    display: flex;
    overflow-x: auto;
    padding: 0px 0px 8px 0px;
    position: relative;
    width: 100%;

    & > div {
        position: relative;
        margin-right: 46px;

        & > ${DefaultTranslationContainer} {
            min-height: 703px;
            max-height: 703px;
        }
    }

    & > ${TranslationContainer} {
        margin-right: 20px;
        height: 703px;
    }
`;

export const TranslationList = styled.div`
    display: flex;
    overflow-x: auto;
    padding: 0px 0px 8px 0px;

    width: 100%;
    height: 717px;

    ${TranslationContainer} {
        margin-right: 20px;
    }
`;
