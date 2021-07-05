import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const Backdrop = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    height: 100%;
`;

export const LoadinContainer = styled.div`
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    margin-bottom: 64px;
`;
