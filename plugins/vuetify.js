import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { VApp, VAppBar, VMain, VContainer, VBtn, VIcon, VRow, VCol, VSelect, VMenu } from 'vuetify/components'
import { VDatePicker } from 'vuetify/components/VDatePicker'

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
            VMenu,
            VSelect,
            VDatePicker
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