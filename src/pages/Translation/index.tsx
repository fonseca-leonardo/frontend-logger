/* eslint-disable no-underscore-dangle */
import { Form, Formik } from 'formik';
import React, { useEffect, createRef, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import handleViewport from 'react-in-viewport';

import BookMark from '../../components/BookMark';
import Button from '../../components/Button';

import { PageContainer } from '../../components/PageContainer';
import { TitleContainer } from '../Dashboard/styles';
import TranslationInput from './components/TranslationInput';
import TranslationTitle from './components/TranslationTitle';

import {
    TranslationList,
    TranslationContainer,
    Container,
    DefaultTranslationContainer,
    BookMarkContainer,
} from './styles';

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
    const [translationCardsRefs, setTranslationCardsRefs] = useState<any[]>([]);
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
                        singular: 'Send',
                        plural: 'Sends',
                    },
                    {
                        name: 'Welcome',
                        male: {
                            singular: 'Hello again, {{name}}.',
                        },
                        female: {
                            singular: 'Hello again, {{name}}.',
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

    return (
        <PageContainer>
            <TitleContainer>
                <h1>{t('Translations')}</h1>
            </TitleContainer>
            <Container>
                <div>
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
                        <h2>{translationRequest?.data.default.language}</h2>
                        <Formik initialValues={{} as any} onSubmit={() => {}}>
                            <Form>
                                {translationRequest.data.default.translations.map(
                                    (translation) => (
                                        <div key={translation.name}>
                                            <TranslationTitle
                                                title={translation.name}
                                                onDelete={() =>
                                                    console.log(
                                                        translation.name,
                                                    )
                                                }
                                            />
                                            <TranslationInput
                                                value={translation.singular}
                                                field={t('Singular')}
                                            />
                                            <TranslationInput
                                                value={translation.plural}
                                                field={t('Plural')}
                                            />
                                            <TranslationInput
                                                value={
                                                    translation.male?.singular
                                                }
                                                field={t('Male singular')}
                                            />
                                            <TranslationInput
                                                value={
                                                    translation.female?.singular
                                                }
                                                field={t('Female singular')}
                                            />
                                            <TranslationInput
                                                value={translation.male?.plural}
                                                field={t('Male plural')}
                                            />
                                            <TranslationInput
                                                value={
                                                    translation.female?.plural
                                                }
                                                field={t('Female plural')}
                                            />
                                            <hr />
                                        </div>
                                    ),
                                )}
                                <Button>{t('Save')}</Button>
                            </Form>
                        </Formik>
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
                                <div ref={translationCardsRefs[index]}>
                                    <h2>{translation.language}</h2>
                                    <Formik
                                        initialValues={{} as any}
                                        onSubmit={() => {}}
                                    >
                                        <Form>
                                            {translation.translations.map(
                                                () => (
                                                    <div />
                                                ),
                                            )}
                                        </Form>
                                    </Formik>
                                </div>
                            </ViewTranslationContainer>
                        ),
                    )}
                </TranslationList>
            </Container>
        </PageContainer>
    );
}
