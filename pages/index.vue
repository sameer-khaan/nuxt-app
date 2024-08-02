<template>
    <Search @search="handleSearch" />
    <Banner />
    <!-- <FlightDetail v-if="showDetails" /> -->
    <HotelDetail v-if="showDetails" />
</template>

<script setup>
    import { ref } from 'vue'
    import Search from '~/components/Search.vue'
    import Banner from '~/components/Banner.vue'
    import FlightDetail from '~/components/FlightDetail.vue'
    import HotelDetail from '~/components/HotelDetail.vue'

    const showDetails = ref(true)
    const handleSearch = () => {
        showDetails.value = true
    }
</script>