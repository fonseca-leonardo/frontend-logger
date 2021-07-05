import styled from 'styled-components';
import { RadioLabel } from '../../../../components/RadioInput/styles';

export const Container = styled.div`
    display: flex;
    margin-bottom: 16px;

    flex-direction: column;

    width: 100%;

    max-height: 400px;
    overflow-y: auto;

    div {
        width: 100%;
    }

    input {
        width: 100%;
    }

    h3 {
        margin: 0;
        margin-bottom: 8px;
    }
`;

export const SubTranslate = styled.div`
    border: 1px solid #585858;
    padding: 16px 12px;
    border-radius: 8px;
    margin-bottom: 16px;
`;

export const TranslateLabel = styled.div`
    margin-top: 12px;
`;

export const SelectContainer = styled.div`
    display: flex;
    margin-bottom: 16px;

    ${RadioLabel} {
        font-size: 12px !important;
    }
`;
