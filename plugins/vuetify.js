import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { VApp, VAppBar, VMain, VContainer, VBtn, VIcon, VRow, VCol } from 'vuetify/components'

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components: {
            VApp,
            VAppBar,
            VMain,
            VContainer,
            VBtn,
            VIcon,
            VRow,
            VCol
        },
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi
            }
        },
        theme: {
            defaultTheme: 'light',
            themes: {
                light: {
                    colors: {
                        primary: '#1976D2',
                        secondary: '#424242',
                        accent: '#82B1FF',
                        error: '#FF5252',
                        info: '#2196F3',
                        success: '#4CAF50',
                        warning: '#FFC107'
                    }
                }
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})