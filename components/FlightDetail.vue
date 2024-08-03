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
        <v-row class="justify-center">
            <v-col cols="11" md="12" lg="11">
                <v-row class="mb-6">
                    <v-col class="col-px-0">
                        <h2 class="text-2xl font-medium">{{ $t('flight.found') }} {{ flights.length }} {{ $t('flight.tickets') }}</h2>
                    </v-col>
                </v-row>
                <v-row v-for="(flight, index) in flights" :key="index" class="mb-6">
                    <v-col cols="9" class="col-p-0 fw-mobile">
                        <v-card class="h-60" elevated>
                            <v-card-item class="position-relative mb-4">
                                <v-chip class="position-absolute px-4" color="orange" text-color="orange darken-4"
                                    style="top: 0px; left: -10px; font-size: 12px; background-color: #fff3e8;">
                                    {{ $t('flight.outbound') }}
                                </v-chip>
                                <v-row no-gutters>
                                    <v-col cols="2">
                                        <v-avatar size="40" class="mt-8" rounded>
                                            <v-img :src="flight.image" cover rounded></v-img>
                                        </v-avatar>
                                    </v-col>
                                    <v-col cols="10">
                                        <v-row class="align-end">
                                            <v-col cols="auto">
                                                <p class="my-0 text-xl font-medium">{{ flight.outbound.departureTime }}</p>
                                                <p class="my-0 text-lg font-medium" style="font-weight: 400; font-size: 12px; color: #1a1a1a;">{{ flight.origin }}</p>
                                                <p class="text--disabled my-0" style="font-size: 12px; color: #7c7d89;">{{ flight.outbound.departureDate }}</p>
                                            </v-col>
                                            <v-col class="pt-2">
                                                <v-row no-gutters class="justify-center text-center">
                                                    <v-col cols="auto">
                                                        <p style="font-size: 12px; color: #7c7d89;">{{ $t('flight.duration') }} {{ flight.outbound.duration }}</p>
                                                    </v-col>
                                                </v-row>
                                                <v-row class="position-relative" no-gutters>
                                                    <v-col cols="auto">
                                                        <v-img src="https://flights.directksa.com/img/icon/vuesax/plane-take-off.svg?v=1.1" height="16" width="16" contain />
                                                        <div class="take-off-image"></div>
                                                    </v-col>
                                                    <v-col class="d-flex flex-column justify-center">
                                                        <v-chip class="mx-auto" color="grey lighten-2" text-color="black">
                                                            {{ $t('flight.stop') }} <v-icon icon="mdi-walk" color="#ff8000" />
                                                        </v-chip>
                                                    </v-col>
                                                    <v-col cols="auto">
                                                        <v-img src="https://flights.directksa.com/img/icon/vuesax/plane-land.svg?v=1.1" height="16" width="16" contain />
                                                        <div class="landing-image"></div>
                                                    </v-col>
                                                </v-row>
                                                <v-row no-gutters class="justify-center text-center">
                                                    <v-col>
                                                        <p class="text--disabled my-0" style="font-size: 12px; color: #7c7d89;">1h 25m</p>
                                                    </v-col>
                                                    <v-col>
                                                        <p class="text--disabled my-0" style="font-size: 12px; color: #7c7d89;">3h 25m</p>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                            <v-col cols="auto">
                                                <p class="my-0 text-xl font-medium">{{ flight.outbound.arivalTime }}</p>
                                                <p class="my-0 text-lg font-medium" style="font-weight: 400; font-size: 12px; color: #1a1a1a;">{{ flight.destination }}</p>
                                                <p class="text--disabled my-0" style="font-size: 12px; color: #7c7d89;">{{ flight.outbound.arivalDate }}</p>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-card-item>

                            <v-card-item class="position-relative mb-2">
                                <v-chip class="position-absolute px-4" color="orange" text-color="orange darken-4"
                                    style="top: 0px; left: -10px; font-size: 12px; background-color: #fff3e8;">
                                    {{ $t('flight.inbound') }}
                                </v-chip>
                                <v-row no-gutters>
                                    <v-col cols="2">
                                        <v-avatar size="40" class="mt-8" rounded>
                                            <v-img :src="flight.image" cover rounded></v-img>
                                        </v-avatar>
                                    </v-col>
                                    <v-col cols="10">
                                        <v-row class="align-end">
                                            <v-col cols="auto">
                                                <p class="my-0 text-xl font-medium">{{ flight.inbound.departureTime }}</p>
                                                <p class="my-0 text-lg font-medium" style="font-weight: 400; font-size: 12px; color: #1a1a1a;">{{ flight.destination }}</p>
                                                <p class="text--disabled my-0" style="font-size: 12px; color: #7c7d89;">{{ flight.inbound.departureDate }}</p>
                                            </v-col>
                                            <v-col class="pt-2">
                                                <v-row no-gutters class="justify-center text-center">
                                                    <v-col cols="auto">
                                                        <p style="font-size: 12px; color: #7c7d89;">{{ $t('flight.duration') }} {{ flight.inbound.duration }}</p>
                                                    </v-col>
                                                </v-row>
                                                <v-row class="position-relative" no-gutters>
                                                    <v-col cols="auto">
                                                        <v-img class="" src="https://flights.directksa.com/img/icon/vuesax/plane-take-off.svg?v=1.1" height="16" width="16" contain />
                                                        <div class="take-off-image"></div>
                                                    </v-col>
                                                    <v-col class="d-flex flex-column justify-center">
                                                        <v-chip class="mx-auto" color="grey lighten-2" text-color="black">
                                                            {{ $t('flight.stop') }} <v-icon icon="mdi-walk" color="#ff8000" />
                                                        </v-chip>
                                                    </v-col>
                                                    <v-col cols="auto">
                                                        <v-img src="https://flights.directksa.com/img/icon/vuesax/plane-land.svg?v=1.1" height="16" width="16" contain />
                                                        <div class="landing-image"></div>
                                                    </v-col>
                                                </v-row>
                                                <v-row no-gutters class="justify-center text-center">
                                                    <v-col>
                                                        <p class="text--disabled my-0" style="font-size: 12px; color: #7c7d89;">4h 5m</p>
                                                    </v-col>
                                                    <v-col>
                                                        <p class="text--disabled my-0" style="font-size: 12px; color: #7c7d89;">1h 55m</p>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                            <v-col cols="auto">
                                                <p class="my-0 text-xl font-medium">{{ flight.inbound.arivalTime }}</p>
                                                <p class="my-0 text-lg font-medium" style="font-weight: 400; font-size: 12px; color: #1a1a1a;">{{ flight.origin }}</p>
                                                <p class="text--disabled my-0" style="font-size: 12px; color: #7c7d89;">{{ flight.inbound.arivalDate }}</p>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-card-item>

                            <v-card-item class="position-relative d-mobile">
                                <v-row class="align-center">
                                    <v-col cols="2">
                                        <div class="text-2xl font-medium">{{ $t('flight.total') }}</div>
                                    </v-col>
                                    <v-col cols="10" class="text-right">
                                        <div class="text-2xl text-theme">{{ getPrice(flight.prices) }}</div>
                                        <div class="text-xs text-gray-500 mb-1">{{ $t('flight.priceFor') }} {{ passengers }} {{ $t('flight.passenger') }}</div>
                                    </v-col>
                                </v-row>
                            </v-card-item>
                        </v-card>
                    </v-col>
                    <v-col cols="3" class="col-p-0 h-mobile">
                        <v-card class="d-flex flex-column h-60 gap-6 align-center justify-center" elevated>
                            <v-card-item>
                                <div class="text-3xl text-theme">{{ getPrice(flight.prices) }}</div>
                                <div class="text-xs text-gray-500 mb-1">{{ $t('flight.priceFor') }} {{ passengers }} {{ $t('flight.passenger') }}</div>
                            </v-card-item>
                            <v-card-item>
                                <v-btn block rounded="lg" varient="tonal" color="#ff8000">
                                    <div class="capital-case font-semibold">{{ $t('flight.viewDetails') }}</div>
                                    <v-icon icon="mdi-chevron-right" />
                                </v-btn>
                            </v-card-item>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>