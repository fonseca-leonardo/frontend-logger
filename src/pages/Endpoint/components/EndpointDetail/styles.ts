import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        flex: 1;
        font-size: 12px;
        height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: break-word;
    }
`;

export const DetailModal = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
`;

export const ModalBackdrop = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
    box-shadow: ${({ theme }) => theme.card.boxShadow};
    background: ${({ theme }) => theme.card.solidBackground};
    position: relative;
    padding: 16px 24px;
    border-radius: 8px;

    width: 100%;
    max-width: 500px;

    max-height: 480px;
    overflow-y: auto;

    margin: 0px 16px;

    margin-bottom: 64px;
    overflow-wrap: break-word;
`;

export const CloseButton = styled.div`
    position: absolute;
    z-index: 8;
    top: -40px;
    left: -20px;
    color: ${({ theme }) => theme.fontColor};
`;
