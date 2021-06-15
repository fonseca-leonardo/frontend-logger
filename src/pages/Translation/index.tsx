import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PageContainer } from '../../components/PageContainer';
import { TitleContainer } from '../Dashboard/styles';

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
        default: ITranslation[],
        translations: ITranslation[]
    }
}

export default function Translation() {
    const { t } = useTranslation();
    const [translationRequest] = useState<ITranslitionRequest>();

    return (
        <PageContainer>
            <TitleContainer>
                <h1>{t('Translations')}</h1>
            </TitleContainer>
            {
                translationRequest?.data.default[0].name
            }
        </PageContainer>
    )
}
