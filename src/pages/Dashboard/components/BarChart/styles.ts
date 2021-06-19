import styled from 'styled-components';

export const StyledCursor = styled.div`
    background: ${({ theme }) => theme.background};
    padding: 2px 12px;

    z-index: 10;
    &:hover {
        fill: red;
    }
`;
