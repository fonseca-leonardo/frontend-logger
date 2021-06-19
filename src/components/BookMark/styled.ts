import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    background: ${({ theme }) => theme.button.background};

    color: white;

    padding: 8px;

    z-index: -1;

    width: 40px;

    border-top-right-radius: 8px;

    border-bottom-right-radius: 8px;

    margin-top: 12px;

    font-size: 12px;

    right: 20px;

    transition: 0.2s all;

    :hover {
        cursor: pointer;

        background: ${({ theme }) =>
            darken(0.07, theme.button.background || '')};

        font-weight: bold;

        transform: translateX(4px);
    }
`;
