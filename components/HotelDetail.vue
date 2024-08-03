<script setup>
    import { computed } from 'vue'
    import { useHotelStore } from '~/stores/hotel'
    import { useSearchStore } from '~/stores/search'
    import { useMainStore } from '~/stores/main'

    const hotelStore = useHotelStore()
    const searchStore = useSearchStore()
    const mainStore = useMainStore()

    const hotels = hotelStore.allHotels
    const currency = computed(() => mainStore.currency)
    const passengers = computed(() => searchStore.passengers)

    const getPrice = (prices) => {
        const price = prices.find(p => p.currency === currency.value)
        const total = (price.amount * passengers.value)
        const tax = calcTax(total)
        return total ? `${(total + tax)} ${price.currency}` : 0
    }

    const calcTax = (total) => {
        const tax = ((total * 13) / 100)
        return tax
    }
</script>

<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="11" md="12" lg="11">
                <v-row class="mb-6">
                    <v-col class="col-px-0">
                        <h2 class="text-1xl text-gray-500 font-medium"><strong class="text-2xl text-black">Karachi</strong> {{ hotels.length }} properties found</h2>
                    </v-col>
                </v-row>
                <v-row v-for="(hotel, index) in hotels" :key="index" class="mb-6">
                    <v-col cols="12" class="col-p-0">
                        <v-card elevated>
                            <v-row class="p-2">
                                <v-col cols="3">
                                    <v-card flat class="h-60">
                                        <v-img :src="hotel.image" cover rounded></v-img>
                                    </v-card>
                                </v-col>
                                <v-col cols="6" class="fw-mobile">
                                    <v-card flat class="d-flex flex-column h-60 align-start justify-between">
                                        <v-card-item>
                                            <div class="d-flex align-center">
                                                <strong class="text-lg text-theme">{{ hotel.name }}</strong>
                                                <div class="text-sm pl-4 d-flex">
                                                    <v-icon icon="mdi-star" color="#ffcd5c" />
                                                    <v-icon icon="mdi-star" color="#ffcd5c" />
                                                    <v-icon icon="mdi-star" color="#ffcd5c" />
                                                    <v-icon icon="mdi-star" color="#ffcd5c" />
                                                    <v-icon icon="mdi-star" color="#ffcd5c" />
                                                </div>
                                            </div>
                                            <v-card-item class="d-mobile">
                                                <div class="d-flex gap-2 align-center">
                                                    <v-chip variant="elevated" color="#ff8000">
                                                        {{ hotel.ratings }}
                                                    </v-chip>
                                                    <div class="d-flex flex-column text-xs">
                                                        <span>{{ $t('hotel.good') }}</span>
                                                        <span class="text-theme">1573 {{ $t('hotel.reviews') }}</span>
                                                    </div>
                                                </div>
                                            </v-card-item>
                                            <div class="text-sm h-mobile">
                                                <v-icon icon="mdi-map-marker-radius-outline" color="#ff8000" />
                                                {{ hotel.location }}
                                                <v-btn variant="text" color="#ff8000" density="compact" size="x-small">{{ $t('hotel.showOnMap') }}</v-btn>
                                            </div>
                                        </v-card-item>
                                        <v-card-item class="text-left">
                                            <div class="mb-4">
                                                <div class="text-1xl mb-2">{{ hotel.roomType }}</div>
                                                <div class="text-xs text-gray-500 mb-2"> <strong class="text-black"> Bedroom: </strong> {{ hotel.bedrooms }}</div>
                                                <div class="text-xs text-gray-500"> <strong class="text-black"> Beds: </strong> {{ hotel.beds }}</div>
                                            </div>
                                            <div class="mb-2 d-flex gap-2 text-xs">
                                                <v-chip variant="flat" color="#4caf50" size="small" class="text-white">{{ $t('hotel.breakfast') }}</v-chip>
                                                <v-chip variant="flat" color="#ffe57f" size="small" class="text-black">{{ $t('hotel.cardNeeded') }}</v-chip>
                                            </div>
                                            <div class="d-flex gap-2 text-xs">
                                                <v-chip variant="flat" color="#ffefef" size="small" class="text-red">Only {{ hotel.roomLeft }} rooms left at this price on our site</v-chip>
                                                <v-chip v-for="(tag, index) in hotel.tags" :key="index" variant="flat" color="#ebfff7" size="small" class="text-green">{{ tag }}</v-chip>
                                            </div>
                                        </v-card-item>
                                        <v-card-item class="pt-0 d-mobile">
                                            <div class="text-xs text-gray-500 mb-1"><strong class="text-2xl text-black">{{ getPrice(hotel.prices) }}</strong> 5 {{ $t('hotel.nights') }}, {{ passengers }} {{ $t('hotel.adults') }}</div>
                                            <div class="text-xs text-gray-500 mb-1 text-theme">+13% {{ $t('hotel.taxes') }}</div>
                                        </v-card-item>
                                    </v-card>
                                </v-col>
                                <v-col cols="3" class="h-mobile">
                                    <v-card flat class="d-flex flex-column h-60 align-end justify-between">
                                        <v-card-item>
                                            <div class="d-flex gap-2 align-center">
                                                <v-chip variant="elevated" color="#ff8000">
                                                    {{ hotel.ratings }}
                                                </v-chip>
                                                <div class="d-flex flex-column text-xs">
                                                    <span>{{ $t('hotel.good') }}</span>
                                                    <span class="text-theme">1573 {{ $t('hotel.reviews') }}</span>
                                                </div>
                                            </div>
                                        </v-card-item>
                                        <v-card-item class="text-right">
                                            <div class="text-xs text-gray-500 mb-1">5 {{ $t('hotel.nights') }}, {{ passengers }} {{ $t('hotel.adults') }}</div>
                                            <div class="text-2xl">{{ getPrice(hotel.prices) }}</div>
                                            <div class="text-xs text-gray-500 mb-1">+13% {{ $t('hotel.taxes') }}</div>
                                            <div>
                                                <v-btn rounded="lg" varient="tonal" color="#ff8000">
                                                    <div class="capital-case font-semibold">{{ $t('hotel.selectRooms') }}</div>
                                                    <v-icon icon="mdi-chevron-right" />
                                                </v-btn>
                                            </div>
                                        </v-card-item>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>