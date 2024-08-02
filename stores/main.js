import { defineStore } from 'pinia'

const currencies = ['USD', 'SAR']
const locales = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'Arabic' }
]

export const useMainStore = defineStore('main', {
    state: () => ({
        currency: 'USD',
        language: 'en',
        AllCurrencies: currencies,
        AllLanguages: locales
    }),
    actions: {
        setCurrency(currency) {
            this.currency = currency
        },
        setLanguage(language) {
            this.language = language
        }
    }
})