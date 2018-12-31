import React from 'react'
import i18n from 'i18next'
import { I18nextProvider } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from 'lang/en.json'
import nl from 'lang/nl.json'

i18n
  .use(LanguageDetector)
  .init({
    fallbackLng: 'nl',
    debug: false,

    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    },

    resources: { en, nl }
  })

const Translations = (props) => (
  <I18nextProvider i18n={i18n} {...props} />
)

export default Translations
