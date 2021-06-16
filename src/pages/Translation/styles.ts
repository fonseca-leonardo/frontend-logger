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

    min-width: 380px;
    h2 {
        text-transform: uppercase;
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
