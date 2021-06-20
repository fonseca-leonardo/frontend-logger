import styled from 'styled-components';
import Button from '../../../../components/Button';

export const ScrollTranslation = styled.div`
    overflow-y: auto;
    padding-left: 24px;
    padding-right: 8px;
    margin-right: 8px;
    height: 554px;
`;

export const CardTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-right: 12px;
    margin-top: 12px;

    h2 {
        margin: 0;
    }
`;

export const CardButton = styled(Button)`
    margin-bottom: 16px;
    margin-top: 16px;
`;
