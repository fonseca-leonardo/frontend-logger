import styled from 'styled-components';
import IconButton from '../IconButton';

export const StyledIconButton = styled(IconButton)`
    margin-left: 12px;
`;

export const Container = styled.header`
    display: flex;

    background: ${({ theme }) => theme.background};

    box-shadow: ${({ theme }) => theme.boxShadow};

    transition: all 0.5s ease;

    padding: 16px 16px;

    z-index: 2;

    width: 100%;

    position: absolute;

    top: 0;

    justify-content: space-between;

    align-items: center;

    & > span {
        font-size: 24px;
        font-weight: bold;
    }

    & > span:hover {
        cursor: pointer;
    }

    & > h1 {
        margin: 0;
    }

    & > div {
        display: flex;

        align-items: center;
    }
`;
