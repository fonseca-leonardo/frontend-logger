import React from 'react';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { IoMdAdd } from 'react-icons/io';

import IconButton from '../../../../components/IconButton';

import TranslationTitle from '../TranslationTitle';
import TranslationInput from '../TranslationInput';

import { ScrollTranslation, CardButton, CardTitle } from './styles';

interface Props {
    translation: {
        language: string;
        translations: Array<any>;
    };
    cardRef?: React.RefObject<HTMLDivElement>;
    onDeleteTranslation(): void;
    onNewTranslation?(): void;
}

const TranslationCard: React.FC<Props> = ({
    translation,
    cardRef,
    onDeleteTranslation,
    onNewTranslation,
}) => {
    const { t } = useTranslation();

    return (
        <Formik initialValues={{} as any} onSubmit={() => {}}>
            <Form>
                <CardTitle>
                    <h2>{translation.language}</h2>
                    {onNewTranslation && (
                        <IconButton title={t('New translation')}>
                            <IoMdAdd size={24} />
                        </IconButton>
                    )}
                </CardTitle>
                <ScrollTranslation ref={cardRef}>
                    {translation.translations.map((translate, index) => (
                        <div key={`${translation.language}-${translate.name}`}>
                            <TranslationTitle
                                title={translate.name}
                                onDelete={() => onDeleteTranslation()}
                            />
                            <TranslationInput
                                value={translate.singular}
                                field={t('Singular')}
                            />
                            <TranslationInput
                                value={translate.plural}
                                field={t('Plural')}
                            />
                            <TranslationInput
                                value={translate.male?.singular}
                                field={t('Male singular')}
                            />
                            <TranslationInput
                                value={translate.female?.singular}
                                field={t('Female singular')}
                            />
                            <TranslationInput
                                value={translate.male?.plural}
                                field={t('Male plural')}
                            />
                            <TranslationInput
                                value={translate.female?.plural}
                                field={t('Female plural')}
                            />
                            {index + 1 !== translation.translations.length && (
                                <hr />
                            )}
                        </div>
                    ))}
                </ScrollTranslation>
                <CardButton>{t('Save')}</CardButton>
            </Form>
        </Formik>
    );
};

export default TranslationCard;
