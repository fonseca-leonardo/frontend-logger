import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

interface Props {
    size?: number;
    color?: string;
}

export const Container = styled.div<Props>`
    border-radius: 50%;
    height: ${({ size }) => (size || 16) * 1.5}px;
    width: ${({ size }) => (size || 16) * 1.5}px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.25s background;
    ${({ color }) =>
        color
            ? css`
                  color: ${color};
                  &:hover {
                      cursor: pointer;
                      background: ${() => transparentize(0.9, color)};
                  }
              `
            : css`
                  &:hover {
                      cursor: pointer;
                      background: ${({ theme }) => theme.lightColor};
                  }
              `}
`;
