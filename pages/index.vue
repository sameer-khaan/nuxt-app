<template>
    <Search />
    <Banner v-if="showDetails" />
    <Flight v-if="showDetails" />
    <Hotel v-if="showDetails" />
</template>

<script setup>
    import { computed } from 'vue'
    import { useSearchStore } from '~/stores/search'
    import Search from '~/components/Search.vue'
    import Banner from '~/components/Banner.vue'
    import Flight from '~/components/FlightDetail.vue'
    import Hotel from '~/components/HotelDetail.vue'

    const searchStore = useSearchStore()
    const showDetails = computed(() => searchStore.showDetails)
</script>