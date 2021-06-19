import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import ptBr from './locales/pt-br/translation.json';

import en from './locales/en/translation.json';

const resources = {
    en: {
        translation: en,
    },

    'pt-BR': {
        translation: ptBr,
    },
};

i18n.use(initReactI18next).init({
    resources,

    lng: document.documentElement.lang,

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
