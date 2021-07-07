/* eslint-disable no-underscore-dangle */
import React, { useEffect, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiDownload } from 'react-icons/fi';

import { useLoading } from '../../hooks/loadingPage';
import ITranslate from '../../interfaces/ITranslate';

import TranslationService from '../../services/TranslationService';
import { IListTranslationResponse } from '../../services/TranslationService/IResponses';

import { PageContainer } from '../../components/PageContainer';
import IconButton from '../../components/IconButton';
import ConfirmDialog from '../../components/ConfirmDialog';
import Button from '../../components/Button';

import NewLanguageForm from './components/NewLanguageForm';
import NewTranslateFrom from './components/NewTranslateForm';

import { Container, TitleContainer, TitleActionsContainer } from './styles';
import TranslationModel from '../../models/TranslationModel';
import LanguageComponent from './components/LanguageComponent';

export default function Translation() {
    const { t } = useTranslation();

    const [translationRequest, setTranslationRequest] =
        useState<IListTranslationResponse>();
    const [selectedTranslate, setSelectedTranslate] = useState<string | null>();
    const [selectedTranslation, setSelectedTranslation] = useState<
        string | null
    >();
    const [selectedLanguage, setSelectedLanguage] =
        useState<TranslationModel>();
    const [openNewLanguage, setOpenNewLanguage] = useState<boolean>(false);
    const [openNewTranslate, setOpenNewTranslate] = useState<boolean>(false);

    const { setLoading } = useLoading();

    const fetchTranslations = async () => {
        try {
            setLoading(true);
            const result = await TranslationService.listTranslations();
            setTranslationRequest(result);
            setSelectedLanguage(result.data.translations[0]);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    const addLanguage = async (language: string) => {
        try {
            setOpenNewLanguage(false);
            setLoading(true);
            await TranslationService.addLanguage(language);
            window.location.reload();
        } catch (error) {
            setOpenNewLanguage(true);
            setLoading(false);
        }
    };

    const addTranslate = async (translate: ITranslate) => {
        try {
            setLoading(true);
            await TranslationService.addTranslate(translate);
            await fetchTranslations();
            setLoading(false);
            setOpenNewTranslate(false);
        } catch (error) {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTranslations();
    }, []);

    const handleDeleteTranslate = useCallback(async () => {
        try {
            setLoading(true);
            if (selectedTranslate && translationRequest?.data.default._id) {
                await TranslationService.removeTranslate(
                    selectedTranslate,
                    translationRequest?.data.default._id,
                );

                await fetchTranslations();
            }
            setSelectedTranslate(null);
            setLoading(false);
        } catch (error) {
            setSelectedTranslate(null);
            setLoading(false);
        }
    }, [selectedTranslate]);

    const handleDeleteTranslation = useCallback(async () => {
        try {
            setLoading(true);
            if (selectedTranslation) {
                await TranslationService.deleteTranslation(selectedTranslation);

                await fetchTranslations();
            }
            setSelectedTranslation(null);
            setLoading(false);
        } catch (error) {
            setSelectedTranslation(null);
            setLoading(false);
        }
    }, [selectedTranslation]);

    const updateTranslation = useCallback(
        async (translation: TranslationModel) => {
            try {
                setLoading(true);
                await TranslationService.updateTranslation(translation);
                await fetchTranslations();
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        },
        [],
    );

    const downloadTranslation = useCallback(async () => {
        try {
            setLoading(true);
            await TranslationService.download();
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }, []);

    return (
        <PageContainer style={{ overflowY: 'auto' }}>
            <TitleContainer>
                <h1>{t('Translations')}</h1>
                <TitleActionsContainer>
                    <Button onClick={() => setOpenNewLanguage(true)}>
                        {t('New language')}
                    </Button>
                    <IconButton
                        title={t('Download translations')}
                        onClick={downloadTranslation}
                    >
                        <FiDownload size={24} />
                    </IconButton>
                </TitleActionsContainer>
            </TitleContainer>
            <Container>
                <LanguageComponent
                    bookMark={translationRequest?.data.translations}
                    setSelectedLanguage={setSelectedLanguage}
                    seletectedLanguage={selectedLanguage}
                    onSubmit={updateTranslation}
                    onNewTranslation={() => setOpenNewTranslate(true)}
                    onDeleteTranslate={(translate) => {
                        setSelectedTranslate(translate);
                    }}
                    translation={translationRequest?.data.default}
                />
                <LanguageComponent
                    onSubmit={updateTranslation}
                    onNewTranslation={() => setOpenNewTranslate(true)}
                    onDeleteTranslation={() =>
                        setSelectedTranslation(selectedLanguage?._id)
                    }
                    translation={selectedLanguage}
                />
            </Container>
            <ConfirmDialog
                isOpen={!!selectedTranslate}
                title={t('Are you sure')}
                onConfirm={() => handleDeleteTranslate()}
                onClose={() => setSelectedTranslate(null)}
            />
            <ConfirmDialog
                isOpen={!!selectedTranslation}
                title={t('Are you sure')}
                onConfirm={() => handleDeleteTranslation()}
                onClose={() => setSelectedTranslation(null)}
            />
            <NewLanguageForm
                isOpen={openNewLanguage}
                onClose={() => setOpenNewLanguage(false)}
                onConfirm={addLanguage}
            />
            <NewTranslateFrom
                isOpen={openNewTranslate}
                onClose={() => setOpenNewTranslate(false)}
                onConfirm={addTranslate}
            />
        </PageContainer>
    );
}
