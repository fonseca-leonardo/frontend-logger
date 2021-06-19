import styled from 'styled-components';

export const Container = styled.header`
    display: flex;

    background: ${({ theme }) => theme.background};

    box-shadow: ${({ theme }) => theme.boxShadow};

    transition: all 0.5s ease;

    padding: 16px 16px;

    width: 100%;

    position: fixed;

    top: 0;

    z-index: 5;

    justify-content: space-between;

    align-items: center;

    & > h1 {
        margin: 0;
    }

    & > div {
        display: flex;

        align-items: center;
    }
`;
