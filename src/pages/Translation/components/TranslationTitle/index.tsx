import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

interface Props {
    title: string;
    onDelete(): void;
}

const TranslationTitle: React.FC<Props> = ({ title, onDelete }) => {
    const { t } = useTranslation();

    return (
        <Container>
            <h3>{title}</h3>
            <TiDeleteOutline
                title={t('Remove')}
                size={24}
                onClick={() => onDelete()}
            />
        </Container>
    );
};

export default TranslationTitle;
