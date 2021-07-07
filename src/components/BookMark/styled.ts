import styled, { css } from 'styled-components';

import { darken } from 'polished';

interface Props {
    selected: boolean;
}

export const Container = styled.div<Props>`
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

    ${({ selected }) =>
        selected
            ? css`
                  background: ${({ theme }) =>
                      darken(0.05, theme.successColor || '')};
                  font-weight: bold;
              `
            : css`
                  background: ${({ theme }) => theme.button.background};
                  :hover {
                      cursor: pointer;

                      background: ${({ theme }) =>
                          darken(0.1, theme.button.background || '')};

                      font-weight: bold;

                      transform: translateX(4px);
                  }
              `}
`;
