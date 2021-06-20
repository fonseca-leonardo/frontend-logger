import React from 'react';
import { useTranslation } from 'react-i18next';

import {
    Container,
    Backdrop,
    DialogContainer,
    DialogActionContainer,
    DialogBodyContainer,
    DialogTitleContainer,
} from './styles';

interface Props {
    isOpen: boolean;
    onConfirm(): void;
    onClose(): void;
}

const ConfirmDialog: React.FC<Props> = ({
    children,
    isOpen,
    onConfirm,
    onClose,
}) => {
    const { t } = useTranslation();

    return isOpen ? (
        <Container>
            <Backdrop />
            <DialogContainer>
                <DialogTitleContainer>
                    <h3>{t('Are you sure')}</h3>
                </DialogTitleContainer>
                <DialogBodyContainer>{children}</DialogBodyContainer>
                <DialogActionContainer>
                    <button type="button" onClick={() => onClose()}>
                        {t('Cancel')}
                    </button>
                    <button type="button" onClick={() => onConfirm()}>
                        {t('Confirm')}
                    </button>
                </DialogActionContainer>
            </DialogContainer>
        </Container>
    ) : (
        <></>
    );
};

export default ConfirmDialog;
