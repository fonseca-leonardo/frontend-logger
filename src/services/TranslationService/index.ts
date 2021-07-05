import TranslationModel from '../../models/TranslationModel';
import api from '../api';
import { IAddTranslateRequest } from './IRequest';
import {
    IAddTranslationResponse,
    IListTranslationResponse,
} from './IResponses';

const routes = {
    listTranslations: '/translations',
    addLanguage: '/translations',
    addTranslate: '/translate',
    download: '/translations/download',
    removeTranslate: (projectId: string, translate: string) =>
        `/translate/${projectId}?name=${translate}`,
    deleteTranslation: (translationId: string) =>
        `/translations/${translationId}`,
    updateTranslation: (translationId: string) =>
        `/translations/${translationId}`,
};

class TranslationService {
    public async listTranslations() {
        const result = await api.get<IListTranslationResponse>(
            routes.listTranslations,
        );

        return result.data;
    }

    public async addLanguage(language: string) {
        const result = await api.post<IAddTranslationResponse>(
            routes.addLanguage,
            { language },
        );

        return result.data;
    }

    public async addTranslate(translate: IAddTranslateRequest) {
        const result = await api.post(routes.addTranslate, { translate });

        return result.data;
    }

    public async removeTranslate(translate: string, projectId: string) {
        const result = await api.delete(
            routes.removeTranslate(projectId, translate),
        );

        return result.data;
    }

    public async deleteTranslation(translationId: string) {
        const result = await api.delete(
            routes.deleteTranslation(translationId),
        );

        return result.data;
    }

    public async updateTranslation(translation: TranslationModel) {
        const result = await api.patch(
            routes.updateTranslation(translation._id),
            {
                translations: translation.translations,
            },
        );

        return result.data;
    }

    public async download() {
        const result = await api.get(routes.download);

        const downloadLink = document.createElement('a');
        const linkSource = `data:application/zip;base64,${result.data}`;
        downloadLink.href = linkSource;
        downloadLink.download = 'locales';
        downloadLink.click();
    }
}

export default new TranslationService();
