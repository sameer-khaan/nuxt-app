<template>
    <v-container class="search-container py-10">
        <v-row>
            <v-col cols="12" class="text-center">
                <h1 class="display-1 font-weight-bold">The lowest flight ticket price around the world</h1>
                <p class="subtitle-1">The perfect travel experience starts with Direct. Book your ticket now.</p>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col cols="12" md="10">
                <v-btn-toggle v-model="tripType" class="mb-3">
                    <v-btn value="oneWay" class="btn-toggle">One way</v-btn>
                    <v-btn value="roundTrip" class="btn-toggle">Round trip</v-btn>
                </v-btn-toggle>
                <v-row>
                    <v-col cols="12" md="3">
                        <v-select v-model="passengers" :items="passengersOptions" label="Class Type" dense></v-select>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-select v-model="classType" :items="flightOptions" label="Class Type" dense></v-select>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-select v-model="origin" :items="cityOptionsFrom" label="From" dense prepend-inner-icon="mdi-airplane-takeoff"></v-select>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-select v-model="destination" :items="cityOptionsTo" label="To" dense prepend-inner-icon="mdi-airplane-landing"></v-select>
                    </v-col>
                    <v-col cols="12" md="3">
                        <!-- <v-date-picker v-model="departureDate"></v-date-picker> -->
                    </v-col>
                    <v-col cols="12" md="3">
                        <!-- <v-date-picker v-model="returnDate"></v-date-picker> -->
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-btn color="orange" class="search-button" @click="search">
                            Search
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { useSearchStore } from '@/stores/search'
import { ref, computed } from 'vue'

export default {
    setup() {
        const searchStore = useSearchStore()

        const tripType = computed({
            get: () => searchStore.tripType,
            set: (value) => searchStore.tripType = value,
        })
        const origin = computed({
            get: () => searchStore.origin,
            set: (value) => searchStore.origin = value,
        })
        const destination = computed({
            get: () => searchStore.destination,
            set: (value) => searchStore.destination = value,
        })
        const departureDate = computed({
            get: () => searchStore.departureDate,
            set: (value) => searchStore.departureDate = value,
        })
        const returnDate = computed({
            get: () => searchStore.returnDate,
            set: (value) => searchStore.returnDate = value,
        })
        const passengers = computed({
            get: () => searchStore.passengers,
            set: (value) => searchStore.passengers = value,
        })
        const classType = computed({
            get: () => searchStore.classType,
            set: (value) => searchStore.classType = value,
        })

        const passengersOptions = ['1 Passenger', '2 Passengers', '3 Passengers']
        const flightOptions = ['Economy', 'Business', 'First Class']
        const cityOptionsFrom = ['Karachi (KHI)', 'Lahore (LHR)', 'Islamabad (ISB)']
        const cityOptionsTo = ['Riyadh (RUH)', 'Jeddah (JED)', 'Dubai (DXB)']

        const search = () => {
            const details = {
                tripType: tripType.value,
                origin: origin.value,
                destination: destination.value,
                departureDate: departureDate.value,
                returnDate: returnDate.value,
                passengers: passengers.value,
                classType: classType.value,
            }
            searchStore.setSearchDetails(details)
            // Implement search functionality
        }

        return {
            tripType,
            origin,
            destination,
            departureDate,
            returnDate,
            passengers,
            classType,
            passengersOptions,
            flightOptions,
            cityOptionsFrom,
            cityOptionsTo,
            search,
        }
    },
}
</script>

<style scoped>
.search-container {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
}

.display-1 {
    font-size: 2.5rem;
}

.subtitle-1 {
    font-size: 1rem;
}

.btn-toggle {
    color: #ff5722;
    font-weight: bold;
}

.search-button {
    width: 100%;
    color: white;
}
</style>