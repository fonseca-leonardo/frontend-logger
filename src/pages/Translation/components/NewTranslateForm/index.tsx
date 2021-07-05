import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

import ConfirmDialog from '../../../../components/ConfirmDialog';
import ITranslate from '../../../../interfaces/ITranslate';

import TextInput from '../../../../components/TextInput';
import RadioInput from '../../../../components/RadioInput';

import {
    Container,
    SelectContainer,
    SubTranslate,
    TranslateLabel,
} from './styles';

interface Props {
    isOpen: boolean;
    onClose(): void;
    onConfirm(_: ITranslate): void;
}

const NewTranslateFrom: React.FC<Props> = ({ isOpen, onClose, onConfirm }) => {
    const { t } = useTranslation();
    const [translateFrom, setTranslateForm] = useState<ITranslate>({
        name: '',
        singular: '',
    });
    const [isPlural, setIsPlural] = useState<boolean>(false);
    const [isGenre, setIsGenre] = useState<boolean>(false);

    const setPlural = (value: boolean) => {
        setTranslateForm((prev) => ({
            ...prev,
            plural: '',
            female: {
                singular: prev.singular,
                plural: '',
            },
            male: {
                singular: prev.singular,
                plural: '',
            },
        }));

        setIsPlural(value);
    };

    const setGenre = (value: boolean) => {
        setTranslateForm((prev) => ({
            ...prev,
            female: {
                singular: '',
                plural: '',
            },
            male: {
                singular: '',
                plural: '',
            },
        }));

        setIsGenre(value);
    };

    const confirmDialog = (translateForm: ITranslate) => {
        const { name, plural, male, female, singular } = translateForm;

        const translate: ITranslate = {
            name,
            singular,
            plural: isPlural ? plural : undefined,
            male: isGenre
                ? {
                      singular: male?.singular || '',
                      plural: isPlural ? male?.plural : undefined,
                  }
                : undefined,
            female: isGenre
                ? {
                      singular: female?.singular || '',
                      plural: isPlural ? female?.plural : undefined,
                  }
                : undefined,
        };

        onConfirm(translate);
    };

    return (
        <Formik
            initialValues={translateFrom}
            onSubmit={() => onConfirm({} as ITranslate)}
            enableReinitialize
        >
            {({ values, setValues }) => (
                <ConfirmDialog
                    title={t('New Translate')}
                    isOpen={isOpen}
                    onClose={onClose}
                    onConfirm={() => {
                        setValues({
                            name: '',
                            singular: '',
                        });
                        confirmDialog(values);
                    }}
                >
                    <Form>
                        <Container>
                            <SelectContainer>
                                <RadioInput
                                    isChecked={isPlural}
                                    label={t('Differentiate by plural')}
                                    onChange={() => setPlural(!isPlural)}
                                />
                                <RadioInput
                                    isChecked={isGenre}
                                    label={t('Differentiate by gender')}
                                    onChange={() => setGenre(!isGenre)}
                                />
                            </SelectContainer>
                            <SubTranslate>
                                <h3>{t('Translate name')}</h3>
                                <TextInput
                                    name="name"
                                    error=""
                                    value={values.name}
                                />
                                <TranslateLabel>
                                    <span>{t('Singular')}</span>
                                    <TextInput
                                        name="singular"
                                        error=""
                                        value={values.singular}
                                    />
                                </TranslateLabel>

                                {isPlural && (
                                    <TranslateLabel>
                                        <span>{t('Plural')}</span>
                                        <TextInput
                                            name="plural"
                                            error=""
                                            value={values.plural}
                                        />
                                    </TranslateLabel>
                                )}
                            </SubTranslate>
                            {isGenre && (
                                <>
                                    <SubTranslate>
                                        <h3>{t('Male')}</h3>
                                        <TranslateLabel>
                                            <span>{t('Singular')}</span>
                                            <TextInput
                                                name="male.singular"
                                                error=""
                                                value={values.male?.singular}
                                            />
                                        </TranslateLabel>
                                        {isPlural && (
                                            <TranslateLabel>
                                                <span>{t('Plural')}</span>
                                                <TextInput
                                                    name="male.plural"
                                                    error=""
                                                    value={values.male?.plural}
                                                />
                                            </TranslateLabel>
                                        )}
                                    </SubTranslate>
                                    <SubTranslate>
                                        <h3>{t('Female')}</h3>
                                        <TranslateLabel>
                                            <span>{t('Singular')}</span>
                                            <TextInput
                                                name="female.singular"
                                                error=""
                                                value={values.female?.singular}
                                            />
                                        </TranslateLabel>
                                        {isPlural && (
                                            <TranslateLabel>
                                                <span>{t('Plural')}</span>
                                                <TextInput
                                                    name="female.plural"
                                                    error=""
                                                    value={
                                                        values.female?.plural
                                                    }
                                                />
                                            </TranslateLabel>
                                        )}
                                    </SubTranslate>
                                </>
                            )}
                        </Container>
                    </Form>
                </ConfirmDialog>
            )}
        </Formik>
    );
};

export default NewTranslateFrom;
