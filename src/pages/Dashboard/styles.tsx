import { KeyboardDatePicker } from '@material-ui/pickers';
import styled from 'styled-components';

export const StyledCursor = styled.div`
    background: ${({ theme }) => theme.background};
    padding: 2px 12px;

    z-index: 10;
    &:hover {
        fill: red;
    }
`;

export const StyledDatePicker = styled(KeyboardDatePicker)`
    label {
        color: ${({ theme }) => theme.fontColor} !important;
    }

    & > div {
        border-bottom: 1px solid ${({ theme }) => theme.fontColor};
    }

    & > div::after {
        border-bottom: 2px solid ${({ theme }) => theme.input.color};
    }

    input {
        color: ${({ theme }) => theme.fontColor};
    }

    button {
        color: ${({ theme }) => theme.fontColor};
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    ${StyledDatePicker}:first-child {
        margin-right: 16px;
    }
`;
