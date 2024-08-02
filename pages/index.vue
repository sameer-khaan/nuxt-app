<template>
    <Search @search="handleSearch" />
    <Banner v-if="showDetails" />
    <Flight v-if="showDetails" />
    <Hotel v-if="showDetails" />
</template>

<script setup>
    import { ref } from 'vue'
    import Search from '~/components/Search.vue'
    import Banner from '~/components/Banner.vue'
    import Flight from '~/components/FlightDetail.vue'
    import Hotel from '~/components/HotelDetail.vue'

    const showDetails = ref(true)
    const handleSearch = () => {
        showDetails.value = true
    }
</script>