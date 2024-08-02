<script setup>
    import { ref, watch } from 'vue'
    import { useMainStore } from '~/stores/main'
    import { useI18n } from 'vue-i18n'

    const mainStore = useMainStore()
    const { locale } = useI18n()
    const languages = ref(mainStore.AllLanguages)
    const currentLanguage = ref(mainStore.language)
    watch(currentLanguage, async (newLanguage) => {
        mainStore.setLanguage(newLanguage)
        locale.value = newLanguage
    })
</script>

<template>
    <v-select v-model="currentLanguage" :items="languages" item-title="name" item-value="code" label="Language" variant="underlined" class="d-flex justify-start m-2"></v-select>
</template>