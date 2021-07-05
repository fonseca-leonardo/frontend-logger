import React from 'react';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { IoMdAdd, IoMdTrash } from 'react-icons/io';

import IconButton from '../../../../components/IconButton';
import TranslationModel from '../../../../models/TranslationModel';

import TranslationTitle from '../TranslationTitle';
import TranslationInput from '../TranslationInput';

import {
    ScrollTranslation,
    CardButton,
    CardTitle,
    TranslationContainer,
    ButtonContainer,
} from './styles';
import { useTheme } from '../../../../contexts/theme';

interface Props {
    translation?: TranslationModel;
    cardRef?: React.RefObject<HTMLDivElement>;
    onDeleteTranslation?(): void;
    onNewTranslation?(): void;
    // eslint-disable-next-line no-unused-vars
    onDeleteTranslate?(translate: string): void;
    // eslint-disable-next-line no-unused-vars
    onSubmit(translation: TranslationModel): void;
}

const TranslationCard: React.FC<Props> = ({
    translation,
    cardRef,
    onSubmit,
    onDeleteTranslation,
    onNewTranslation,
    onDeleteTranslate,
}) => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return translation ? (
        <Formik
            initialValues={translation}
            onSubmit={onSubmit}
            enableReinitialize
        >
            {({ handleChange, values }) => (
                <Form>
                    <CardTitle>
                        <h2>{translation?.language}</h2>
                        <ButtonContainer>
                            {onNewTranslation && (
                                <IconButton
                                    title={t('New translation')}
                                    onClick={() => onNewTranslation()}
                                >
                                    <IoMdAdd size={24} />
                                </IconButton>
                            )}
                            {onDeleteTranslation && (
                                <IconButton
                                    title={t('Remove')}
                                    onClick={() => onDeleteTranslation()}
                                >
                                    <IoMdTrash
                                        size={24}
                                        color={theme.errorColor}
                                    />
                                </IconButton>
                            )}
                        </ButtonContainer>
                    </CardTitle>
                    <ScrollTranslation ref={cardRef}>
                        {values?.translations.map((translate, index) => (
                            <TranslationContainer
                                key={`${translation.language}-${translate.name}`}
                            >
                                <TranslationTitle
                                    title={translate.name}
                                    onDelete={onDeleteTranslate}
                                />
                                <TranslationInput
                                    name={`translations[${index}].singular`}
                                    value={translate.singular}
                                    onChange={handleChange}
                                    field={t('Singular')}
                                />
                                <TranslationInput
                                    name={`translations[${index}].plural`}
                                    value={translate.plural}
                                    field={t('Plural')}
                                    onChange={handleChange}
                                />
                                <TranslationInput
                                    name={`translations[${index}].male.singular`}
                                    value={translate.male?.singular}
                                    field={t('Male singular')}
                                    onChange={handleChange}
                                />
                                <TranslationInput
                                    name={`translations[${index}].female.singular`}
                                    value={translate.female?.singular}
                                    field={t('Female singular')}
                                    onChange={handleChange}
                                />
                                <TranslationInput
                                    name={`translations[${index}].male.plural`}
                                    value={translate.male?.plural}
                                    field={t('Male plural')}
                                    onChange={handleChange}
                                />
                                <TranslationInput
                                    name={`translations[${index}].female.plural`}
                                    value={translate.female?.plural}
                                    field={t('Female plural')}
                                    onChange={handleChange}
                                />
                            </TranslationContainer>
                        ))}
                    </ScrollTranslation>
                    <CardButton>{t('Save')}</CardButton>
                </Form>
            )}
        </Formik>
    ) : (
        <></>
    );
};

export default TranslationCard;
