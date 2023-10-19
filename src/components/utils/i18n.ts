import { createI18n } from 'vue-i18n'
import en from './en.json'
import pt from './pt.json'

export const i18n = createI18n({
  locale: 'pt',
  messages: { en, pt }
})
