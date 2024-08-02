<script setup>
    import { ref, watch } from 'vue'
    import { useMainStore } from '~/stores/main'

    const mainStore = useMainStore()
    const currencies = ref(mainStore.AllCurrencies)
    const currentCurrency = ref(mainStore.currency)
    watch(currentCurrency, (newCurrency) => {
        mainStore.setCurrency(newCurrency)
    })
</script>

<template>
    <v-select v-model="currentCurrency" :items="currencies" label="Currency" variant="underlined" class="d-flex justify-end m-2"></v-select>
</template>