import React from 'react';
import BookMark from '../../../../components/BookMark';
import TranslationModel from '../../../../models/TranslationModel';

import TranslationCard from '../TranslationCard';

import { TranslationContainer, BookMarkerContainer } from './styles';

interface Props {
    translation?: TranslationModel;
    cardRef?: React.RefObject<HTMLDivElement>;
    bookMark?: TranslationModel[];
    seletectedLanguage?: TranslationModel;
    // eslint-disable-next-line no-unused-vars
    setSelectedLanguage?(selected: TranslationModel): void;
    onDeleteTranslation?(): void;
    onNewTranslation?(): void;
    // eslint-disable-next-line no-unused-vars
    onDeleteTranslate?(translate: string): void;
    // eslint-disable-next-line no-unused-vars
    onSubmit(translation: TranslationModel): void;
}

const LanguageComponent: React.FC<Props> = ({
    bookMark,
    seletectedLanguage,
    translation,
    cardRef,
    setSelectedLanguage,
    onDeleteTranslate,
    onNewTranslation,
    onDeleteTranslation,
    onSubmit,
}) => {
    if (bookMark && setSelectedLanguage) {
        return (
            <BookMarkerContainer>
                {bookMark.map(
                    (el, index) =>
                        el.language && (
                            <BookMark
                                key={el.language}
                                style={{
                                    top: index * 60,
                                    position: 'absolute',
                                }}
                                text={el.language}
                                selected={
                                    seletectedLanguage?.language === el.language
                                }
                                onClick={() => {
                                    setSelectedLanguage(el);
                                }}
                            />
                        ),
                )}
                <TranslationContainer style={{ marginRight: 54 }}>
                    <TranslationCard
                        cardRef={cardRef}
                        onSubmit={onSubmit}
                        translation={translation}
                        onDeleteTranslate={onDeleteTranslate}
                        onNewTranslation={onNewTranslation}
                        onDeleteTranslation={onDeleteTranslation}
                    />
                </TranslationContainer>
            </BookMarkerContainer>
        );
    }
    return (
        <TranslationContainer>
            <TranslationCard
                cardRef={cardRef}
                onSubmit={onSubmit}
                translation={translation}
                onDeleteTranslate={onDeleteTranslate}
                onDeleteTranslation={onDeleteTranslation}
            />
        </TranslationContainer>
    );
};

export default LanguageComponent;
