import i18n, { use } from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "react-native-localize";
import { MMKV } from "react-native-mmkv";
import { MMKVKeys } from "../constants";
import en from './en.json'

const storage = new MMKV()

const LANGUAGE_DETECTOR = {
    type: 'languageDetector',
    async: true,
    detect: (callBack: (language: string) => void) => {
        const deviceLang = getLocales()[0].languageCode;
        const language = storage.getString(MMKVKeys.appLanguage);
        callBack(language ?? deviceLang)
    },
    init: () => { },
    cacheUserLanguage: (language: string) => {
        storage.set(MMKVKeys.appLanguage, language)
    }
}

use<any>(LANGUAGE_DETECTOR)
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        fallbackLng: 'en',
        ns: ['common'],
        defaultNS: 'common',
        resources: {
            en: en
        }
    })

export default i18n;