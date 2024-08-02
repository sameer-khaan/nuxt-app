import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { VApp, VAppBar, VMain, VContainer, VBtn, VIcon, VRow, VCol, VSelect } from 'vuetify/components'

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
            VCol,
            VSelect
        },
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})