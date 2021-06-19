import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        margin: 0px;
        margin-bottom: 8px;
    }

    svg {
        color: ${({ theme }) => theme.errorColor};
    }

    svg:hover {
        cursor: pointer;
    }
`;
