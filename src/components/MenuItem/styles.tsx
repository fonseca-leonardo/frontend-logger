import styled from 'styled-components';

interface IContainerProps {
    isCurrentPage: boolean;
}

export const StyledContainer = styled.div<IContainerProps>`
    display: flex;
    align-items: center;
    
  
    span {
        text-decoration: none;
        margin-left: 8px;
        color: ${({ isCurrentPage, theme }) => isCurrentPage ? theme.sideMenu.selectedCell.color : theme.sideMenu.notSelectedCell.color };

        font-size: 18px;

        font-weight: 700;
    }
    
    & svg {
        font-size: 22px;
        display: inline-block;
        z-index: 1;
        position: relative;
        color: ${({ isCurrentPage, theme }) => isCurrentPage ? theme.sideMenu.selectedCell.color : theme.sideMenu.notSelectedCell.color };
        filter: ${({ isCurrentPage, theme }) =>
          isCurrentPage
            ? `drop-shadow(0px 0px 5px ${theme.sideMenu.iconGlow})`
            : ""};
    }
`;