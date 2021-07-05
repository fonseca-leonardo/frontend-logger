import React, { useCallback, useEffect } from 'react';
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
    title: string;
    onConfirm(): void;
    onClose(): void;
}

const ConfirmDialog: React.FC<Props> = ({
    children,
    isOpen,
    title,
    onConfirm,
    onClose,
}) => {
    const { t } = useTranslation();

    const handleUserKeyPress = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);

        return () => {
            window.removeEventListener('keydown', handleUserKeyPress);
        };
    }, [handleUserKeyPress]);

    return isOpen ? (
        <Container>
            <Backdrop />
            <DialogContainer>
                <DialogTitleContainer>
                    <h3>{title}</h3>
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
