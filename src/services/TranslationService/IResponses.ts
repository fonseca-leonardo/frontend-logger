import TranslationModel from '../../models/TranslationModel';

export interface IListTranslationResponse {
    data: {
        default: TranslationModel;
        translations: Array<TranslationModel>;
    };
}

export interface IAddTranslationResponse {
    data: TranslationModel;
}
