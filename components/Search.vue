<script setup>
    import { computed } from 'vue'
    import { useSearchStore } from '~/stores/search'

    const searchStore = useSearchStore()

    const tripType = computed({
        get: () => searchStore.tripType,
        set: (value) => (searchStore.tripType = value),
    })
    const origin = computed({
        get: () => searchStore.origin,
        set: (value) => (searchStore.origin = value),
    })
    const destination = computed({
        get: () => searchStore.destination,
        set: (value) => (searchStore.destination = value),
    })
    const departureDate = computed({
        get: () => searchStore.departureDate,
        set: (value) => (searchStore.departureDate = value),
    })
    const returnDate = computed({
        get: () => searchStore.returnDate,
        set: (value) => (searchStore.returnDate = value),
    })
    const passengers = computed({
        get: () => searchStore.passengers,
        set: (value) => (searchStore.passengers = value),
    })
    const classType = computed({
        get: () => searchStore.classType,
        set: (value) => (searchStore.classType = value),
    })

    const passengersOptions = ['1 Passenger', '2 Passengers', '3 Passengers', '4 Passengers']
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
    }
</script>

<template>
    <div class="search-container d-flex align-center justify-center h-100 py-10">
        <v-container>
            <v-row>
                <v-col class="text-center">
                    <h1 class="text-4xl text-gray-600 font-weight-bold my-4">{{ $t('search.title') }}</h1>
                    <p class="text-1xl">{{ $t('search.subTitle') }}</p>
                </v-col>
            </v-row>
            <v-row class="justify-center">
                <v-col sm="10" md="10" lg="8">
                    <v-row>
                        <v-col cols="12" sm="4" md="3" lg="3">
                            <v-btn-toggle v-model="tripType" class="mb-3">
                                <v-btn value="oneWay" class="btn-toggle"><div class="capital-case">{{ $t('search.oneWay') }}</div></v-btn>
                                <v-btn value="roundTrip" class="btn-toggle"><div class="capital-case">{{ $t('search.roundTrip') }}</div></v-btn>
                            </v-btn-toggle>
                        </v-col>
                        <v-col cols="12" sm="4" md="3" lg="2">
                            <v-select v-model="passengers" :items="passengersOptions" variant="solo" density="compact"></v-select>
                        </v-col>
                        <v-col cols="12" sm="4" md="3" lg="2">
                            <v-select v-model="classType" :items="flightOptions" variant="solo" density="compact"></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="3" class="p-0">
                            <v-select v-model="origin" :items="cityOptionsFrom" class="bg-white" :label="$t('search.origin')" prepend-inner-icon="mdi-airplane-takeoff" variant="outlined" clearable></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="3" class="p-0">
                            <v-select v-model="destination" :items="cityOptionsTo" class="bg-white" :label="$t('search.destination')" prepend-inner-icon="mdi-airplane-landing" variant="outlined" clearable></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="2" class="p-0">
                            <v-text-field v-model="departureDate" :label="$t('search.departure')" prepend-inner-icon="mdi-calendar" variant="solo"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="2" class="p-0">
                            <v-text-field v-model="returnDate" :label="$t('search.return')" prepend-inner-icon="mdi-calendar" variant="solo"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="2" class="p-0">
                            <v-btn color="orange" class="search-button" @click="search">
                                Search
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
    .search-container {
        background-color: #f9f9f9;
        background-image: url('icons/search_bg.png');
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 440px;
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