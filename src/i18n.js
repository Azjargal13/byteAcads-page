import VueI18n from 'vue-i18n'
import Vue from 'vue'
import mn from "../src/assets/i18n/mn.json"
import en from "../src/assets/i18n/en.json"
Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'mn', // set locale
  messages: {
    en: en,
    mn: mn
  }

})