import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';
import IconButton from '../../../../components/IconButton';
import { useTheme } from '../../../../contexts/theme';

interface Props {
    title: string;
    // eslint-disable-next-line no-unused-vars
    onDelete?(translate: string): void;
}

const TranslationTitle: React.FC<Props> = ({ title, onDelete }) => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <Container>
            <h3>{title}</h3>
            {onDelete && (
                <IconButton title={t('Remove')} color={theme.errorColor}>
                    <TiDeleteOutline
                        size={24}
                        onClick={() => onDelete(title)}
                    />
                </IconButton>
            )}
        </Container>
    );
};

export default TranslationTitle;
