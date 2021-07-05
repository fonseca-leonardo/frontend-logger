import React, { useCallback, useState } from 'react';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';
import TextInput from '../../../../components/TextInput';
import ConfirmDialog from '../../../../components/ConfirmDialog';

interface Props {
    isOpen: boolean;
    onClose(): void;
    onConfirm(_: string): void;
}

const NewLanguageForm: React.FC<Props> = ({ isOpen, onClose, onConfirm }) => {
    const [languageForm, setLanguageForm] = useState({ language: '' });
    const { t } = useTranslation();

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setLanguageForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }, []);

    return (
        <ConfirmDialog
            title={t('New language')}
            isOpen={isOpen}
            onClose={onClose}
            onConfirm={() => onConfirm(languageForm.language)}
        >
            <Formik
                initialValues={languageForm}
                onSubmit={() => {
                    onConfirm(languageForm.language);
                }}
            >
                <Form>
                    <Container>
                        <div>
                            <span>Language</span>
                            <TextInput
                                value={languageForm.language}
                                name="language"
                                onChange={onChange}
                                error=""
                            />
                        </div>
                    </Container>
                </Form>
            </Formik>
        </ConfirmDialog>
    );
};

export default NewLanguageForm;
