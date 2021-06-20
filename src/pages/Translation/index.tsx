/* eslint-disable no-underscore-dangle */
import React, { useEffect, createRef, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import handleViewport from 'react-in-viewport';
import { FiDownload } from 'react-icons/fi';

import BookMark from '../../components/BookMark';

import { PageContainer } from '../../components/PageContainer';
import TranslationCard from './components/TranslationCard';

import {
    TranslationList,
    TranslationContainer,
    Container,
    DefaultTranslationContainer,
    BookMarkContainer,
    TitleContainer,
    TitleActionsContainer,
} from './styles';
import IconButton from '../../components/IconButton';
import ConfirmDialog from '../../components/ConfirmDialog';
import Button from '../../components/Button';

interface ITranslation {
    name: string;
    singular?: string;
    plural?: string;
    male?: {
        singular: string;
        plural?: string;
    };
    female?: {
        singular: string;
        plural?: string;
    };
}

interface ITranslitionRequest {
    data: {
        default: {
            _id: string;
            language: string;
            translations: ITranslation[];
        };
        translations: Array<{
            _id: string;
            language: string;
            translations: ITranslation[];
        }>;
    };
}

const Block = (props: any) => {
    const { forwardedRef, children, key } = props;
    return (
        <TranslationContainer key={key} ref={forwardedRef}>
            {children}
        </TranslationContainer>
    );
};

const ViewTranslationContainer = handleViewport(Block, { threshold: 0.5 });

const orderByName = (a: any, b: any) => {
    if (a.language < b.language) {
        return -1;
    }
    if (a.language > b.language) {
        return 1;
    }
    return 0;
};

export default function Translation() {
    const { t } = useTranslation();
    const [translationCardsRefs, setTranslationCardsRefs] = useState<
        Array<React.RefObject<HTMLDivElement>>
    >([]);
    const [unvisableTranslations, setUnvisableTranslations] = useState<
        Array<{ ref: React.RefObject<HTMLDivElement> | null; language: string }>
    >([]);
    const [translationRequest] = useState<ITranslitionRequest>({
        data: {
            default: {
                _id: 'alksj123',
                language: 'en',
                translations: [
                    {
                        name: 'Send',
                        singular: 'Enviar',
                        plural: 'Enviados',
                    },
                    {
                        name: 'Welcome',
                        male: {
                            singular: 'Seja bem-vindo, {{name}}.',
                        },
                        female: {
                            singular: 'Seja bem-vinda, {{name}}.',
                        },
                    },
                ],
            },
            translations: [
                {
                    language: 'pt-BR',
                    _id: 'jasdfhk76t32r',
                    translations: [
                        {
                            name: 'Send',
                            singular: 'Enviar',
                            plural: 'Enviados',
                        },
                        {
                            name: 'Welcome',
                            male: {
                                singular: 'Seja bem-vindo, {{name}}.',
                            },
                            female: {
                                singular: 'Seja bem-vinda, {{name}}.',
                            },
                        },
                    ],
                },
                {
                    _id: 'asdfasdfg',
                    language: 'fr',
                    translations: [],
                },
                {
                    _id: 'ghkjghjk',
                    language: 'gr',
                    translations: [],
                },
                {
                    _id: 'srfgsrgssrd',
                    language: 'es-AR',
                    translations: [],
                },
            ].sort(orderByName),
        },
    });
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleTranslationVisable = useCallback(
        (visable: boolean, ref: any, language: string) => {
            let updateUnvisableTranslations: Array<{
                ref: React.RefObject<HTMLDivElement> | null;
                language: string;
            }> = [];
            if (visable) {
                updateUnvisableTranslations = unvisableTranslations.filter(
                    (el) => el.language !== language,
                );
                updateUnvisableTranslations.sort(orderByName);
                setUnvisableTranslations(updateUnvisableTranslations);
            } else {
                setUnvisableTranslations((prev) =>
                    [...prev, { ref, language }].sort(orderByName),
                );
            }
        },
        [unvisableTranslations],
    );

    useEffect(() => {
        const ref = translationRequest.data.translations.map(() =>
            createRef<HTMLDivElement>(),
        );
        setTranslationCardsRefs(
            translationRequest.data.translations.map((_, index) => ref[index]),
        );

        setUnvisableTranslations(
            translationRequest.data.translations.map((el, index) => ({
                ref: ref[index],
                language: el.language,
            })),
        );
    }, [translationRequest.data.translations]);

    const handleDialogConfirmation = useCallback(() => {
        setIsOpen(false);
    }, []);

    const handleDeleteTranslation = useCallback(() => {
        setIsOpen(true);
    }, []);

    return (
        <PageContainer>
            <TitleContainer>
                <h1>{t('Translations')}</h1>
                <TitleActionsContainer>
                    <Button>{t('New language')}</Button>
                    <IconButton title={t('Download translations')}>
                        <FiDownload size={24} />
                    </IconButton>
                </TitleActionsContainer>
            </TitleContainer>
            <Container>
                <div style={{ marginRight: 46 }}>
                    <BookMarkContainer>
                        {unvisableTranslations.map(
                            (el, index) =>
                                el.language && (
                                    <BookMark
                                        key={el.language}
                                        style={{ top: index * 50 }}
                                        text={el.language}
                                        onClick={() => {
                                            el.ref?.current?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'nearest',
                                                inline: 'center',
                                            });
                                        }}
                                    />
                                ),
                        )}
                    </BookMarkContainer>
                    <DefaultTranslationContainer>
                        <TranslationCard
                            onNewTranslation={() => {}}
                            onDeleteTranslation={handleDeleteTranslation}
                            translation={translationRequest?.data.default}
                        />
                    </DefaultTranslationContainer>
                </div>
                <TranslationList>
                    {translationRequest.data.translations.map(
                        (translation, index) => (
                            <ViewTranslationContainer
                                key={translation._id}
                                onEnterViewport={() =>
                                    handleTranslationVisable(
                                        true,
                                        translationCardsRefs[index],
                                        translation.language,
                                    )
                                }
                                onLeaveViewport={() =>
                                    handleTranslationVisable(
                                        false,
                                        translationCardsRefs[index],
                                        translation.language,
                                    )
                                }
                            >
                                <TranslationCard
                                    onDeleteTranslation={
                                        handleDeleteTranslation
                                    }
                                    cardRef={translationCardsRefs[index]}
                                    translation={translation}
                                />
                            </ViewTranslationContainer>
                        ),
                    )}
                </TranslationList>
            </Container>
            <ConfirmDialog
                isOpen={isOpen}
                onConfirm={() => {
                    handleDialogConfirmation();
                }}
                onClose={() => setIsOpen(false)}
            />
        </PageContainer>
    );
}
