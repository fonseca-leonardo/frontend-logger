import styled, { css } from 'styled-components';

import { darken } from 'polished';

export const StyledButton = styled.button`
    color: white;

    border: none;

    text-transform: uppercase;

    padding: 8px 16px;

    width: 100%;

    border-radius: 8px;

    transition: 0.25s background;

    box-shadow: ${({ theme }) => theme.button.boxShadow};

    ${({ theme, disabled }) =>
        disabled
            ? css`
                  background-color: gray;
              `
            : css`
                  background-color: ${theme.button.background};

                  :hover {
                      cursor: pointer;

                      background-color: ${darken(
                          0.07,
                          theme.button.background || '',
                      )};
                  }
              `}
`;
