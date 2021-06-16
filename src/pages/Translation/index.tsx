import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PageContainer } from '../../components/PageContainer';
import { TitleContainer } from '../Dashboard/styles';

import { TranslationList, TranslationContainer } from './styles';

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
            language: string;
            translations: ITranslation[];
        },
        translations: Array<{
            language: string;
            translations: ITranslation[];
        }>;
    }
}

export default function Translation() {
    const { t } = useTranslation();
    const [translationRequest] = useState<ITranslitionRequest>({
        data: {
            default: {
                language: 'en',
                translations: [],
            },
            translations: []
        }
    });

    return (
        <PageContainer>
            <TitleContainer>
                <h1>{t('Translations')}</h1>
            </TitleContainer>
            <TranslationList>
                <TranslationContainer>
                    <h2>{translationRequest?.data.default.language}</h2>
                </TranslationContainer>
                <TranslationContainer>
                    <h2>{translationRequest?.data.default.language}</h2>
                </TranslationContainer>
                <TranslationContainer>
                    <h2>{translationRequest?.data.default.language}</h2>
                </TranslationContainer>
            </TranslationList>

        </PageContainer>
    )
}
