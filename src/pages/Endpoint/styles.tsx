import styled, { css } from 'styled-components';
import { KeyboardDatePicker } from '@material-ui/pickers';

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
    padding: 0 12px;
    ${StyledDatePicker}:first-child {
        margin-right: 16px;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    min-height: 60px;
    border-radius: 10px;
    padding: 10px 30px;

    width: 100%;
    margin-top: 24px;

    box-shadow: ${({ theme }) => theme.card.boxShadow};
    background: ${({ theme }) => theme.card.background};
    transition: all 0.2s ease;

    &:hover {
        font-weight: bold;
        cursor: pointer;
    }
`;

interface ExpandProps {
    expanded: boolean;
}

export const Expand = styled.div<ExpandProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    transition: all 0.2s ease;

    &:hover {
        font-weight: bold;
        cursor: pointer;
    }

    svg {
        transition: all 0.2s ease;

        ${({ expanded }) =>
            expanded
                ? css`
                      transform: rotate(-180deg);
                  `
                : css`
                      transform: rotate(0deg);
                  `}
    }
`;

export const ExpandContent = styled.div`
    overflow-y: auto;

    height: 268px;

    &:hover {
        cursor: pointer;
    }

    & > div {
        padding: 8px 0px;
    }

    & > div:nth-child(odd) {
        background-color: ${({ theme }) => theme.darkColor};

        &:hover {
        }
    }
`;

interface ExpandableRowProps {
    selected: boolean;
}

export const ExpandableRow = styled.div<ExpandableRowProps>`
    min-height: 60px;
    box-shadow: ${({ theme }) => theme.card.boxShadow};
    background: ${({ theme }) => theme.card.solidBackground};

    border-radius: 10px;
    padding: 10px 30px;
    transition: all 0.2s ease;
    height: ${({ selected }) => (selected ? '360px' : '60px')};

    transition: all 0.2s ease;
`;

export const EndpointContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center; ;
`;

export const StatusContainer = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;

    justify-content: space-between;
    text-align: center;
`;

export const ListContainer = styled.div`
    & > span {
        font-size: 24px;
    }
    width: 100%;

    ${ExpandableRow} {
        margin-top: 24px;
    }

    ${ExpandableRow}:first-child {
        margin-top: 0px;
    }

    ${Row}:first-child {
        margin-top: 0px;
    }
`;

export const Wrapper = styled.div`
    margin-top: 24px;

    ${ListContainer}:first-child {
        margin-right: 16px;
    }

    ${ListContainer}:last-child {
        margin-left: 16px;
    } ;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: flex-end;

    justify-content: space-evenly;

    button {
        height: 32px;
        width: fit-content;
        margin-left: 12px;
        box-shadow: none;
    }
`;
