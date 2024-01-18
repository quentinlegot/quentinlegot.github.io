import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import ChainedBackend from "i18next-chained-backend"
import HttpBackend from "i18next-http-backend"
// import LocalStorageBackend from "i18next-localstorage-backend"

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(ChainedBackend)
    .init({
        supportedLngs: ['en', 'fr'],
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage'],
            htmlTag: document.documentElement
        },
        backend: {
            backends: [
                // LocalStorageBackend,
                HttpBackend
            ],
            backendOptions: [{}, {
                loadPath: '/locales/{{lng}}/{{ns}}.json'
            }],
            cacheHitMode: 'refresh'
        }

    })

export default i18n;