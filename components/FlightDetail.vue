<script setup>
    import { useFlightStore } from '~/stores/flight'
    import { useMainStore } from '~/stores/main'

    const flightStore = useFlightStore()
    const mainStore = useMainStore()

    const flights = flightStore.flights
    const currency = mainStore.currency
</script>

<style scoped>
    .mb-4 {
        margin-bottom: 16px;
    }
</style>

<template>
    <div>
        <v-card v-for="flight in flights" :key="flight.id" class="mb-4">
            <v-card-title>{{ flight.airways }}</v-card-title>
            <v-card-subtitle>{{ flight.source }} - {{ flight.destination }}</v-card-subtitle>
            <v-card-text>
                <div>{{ flight.flightDuration }}</div>
                <div>{{ flight.flightTime }}</div>
                <div>{{ flight.price }} {{ currency }}</div>
            </v-card-text>
        </v-card>
    </div>
</template>