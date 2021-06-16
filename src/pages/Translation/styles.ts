import styled from 'styled-components';


export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;

`;

export const TranslationContainer = styled.div`
    background: ${({ theme }) => theme.card.background};
    box-shadow: ${({ theme }) => theme.card.boxShadow};
    padding: 12px 24px;
    border-radius: 4px;

    width: 380px;
    height: 100%;

    h2 {
        text-transform: uppercase;
    }
`;

export const TranslationList = styled.div`
    display: flex;
    ${TranslationContainer} {
        margin-right: 20px;
    }
`;
