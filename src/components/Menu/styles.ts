import styled from 'styled-components';

export const StyledCard = styled.div`
    width: 250px;

    min-width: 250px;

    height: 800px;

    margin-right: 16px;

    border-radius: 10px;

    padding: 12px 0px;

    box-shadow: ${({ theme }) => theme.card.boxShadow};

    background: ${({ theme }) => theme.card.solidBackground};

    transition: all 0.5s ease;

    & > ul {
        list-style-type: none;

        li {
            margin-top: 16px;
        }

        li:first-child {
            margin-top: 0px;
        }
    }
`;
