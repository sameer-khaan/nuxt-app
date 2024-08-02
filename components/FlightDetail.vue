<script setup>
    import { computed } from 'vue'
    import { useFlightStore } from '~/stores/flight'
    import { useSearchStore } from '~/stores/search'
    import { useMainStore } from '~/stores/main'

    const flightStore = useFlightStore()
    const searchStore = useSearchStore()
    const mainStore = useMainStore()

    const flights = flightStore.allFlights
    const currency = computed(() => mainStore.currency)
    const passengers = computed(() => searchStore.passengers)
    const classType = computed(() => searchStore.classType)

    const getPrice = (prices) => {
        const price = prices[classType.value].find(p => p.currency === currency.value);
        return price ? `${(price.amount * passengers.value)} ${price.currency}` : 0
    };
</script>

<template>
    <v-container>
        <v-row v-for="(flight, index) in flights" :key="index" class="mb-4">
            <v-col cols="12">
                <v-card elevated>
                    <v-row class="p-2">
                        <v-col cols="12">
                            <v-card flat class="d-flex flex-column align-start justify-between">
                                <v-card-title>{{ flight.airways }}</v-card-title>
                                <v-card-subtitle>{{ flight.source }} - {{ flight.destination }}</v-card-subtitle>
                                <v-card-item class="d-flex justify-between">
                                    <div class="flight-info">
                                        <div class="outbound">
                                            <div class="details">
                                                <span>{{ flight.outbound.departureTime }}</span>
                                                <span>{{ flight.source }}</span>
                                                <span>{{ flight.outbound.departureDate }}</span>
                                            </div>
                                            <div class="duration-stop">
                                                <span>Total Duration {{ flight.outbound.duration }}</span>
                                                <span>Stop</span>
                                            </div>
                                            <div class="details">
                                                <span>{{ flight.outbound.arivalTime }}</span>
                                                <span>{{ flight.destination }}</span>
                                                <span>{{ flight.outbound.arivalDate }}</span>
                                            </div>
                                        </div>
                                        <div class="inbound">
                                            <div class="details">
                                                <span>{{ flight.inbound.departureTime }}</span>
                                                <span>{{ flight.destination }}</span>
                                                <span>{{ flight.inbound.departureDate }}</span>
                                            </div>
                                            <div class="duration-stop">
                                                <span>Total Duration {{ flight.inbound.duration }}</span>
                                                <span>Stop</span>
                                            </div>
                                            <div class="details">
                                                <span>{{ flight.inbound.arivalTime }}</span>
                                                <span>{{ flight.source }}</span>
                                                <span>{{ flight.inbound.arivalDate }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>{{ getPrice(flight.prices) }}</span>
                                        <v-btn color="orange">View details</v-btn>
                                    </div>
                                </v-card-item>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.mb-4 {
    margin-bottom: 16px;
}

.flight-info {
    display: flex;
    flex-direction: column;
}

.details {
    display: flex;
    flex-direction: column;
}

.duration-stop {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.price {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
</style>