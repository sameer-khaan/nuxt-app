<template>
    <v-container>
        <v-row v-for="(hotel, index) in hotels" :key="index" class="mb-4">
            <v-col cols="12">
                <v-card elevated>
                    <v-row class="p-2">
                        <v-col cols="3" class="h-60">
                            <v-img :src="hotel.image" cover rounded></v-img>
                        </v-col>
                        <v-col cols="6">
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
                                    <div class="text-sm">
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
                                    <div class="mb-2 d-flex gap-2 text-xs">
                                        <v-chip variant="flat" color="#ffefef" size="small" class="text-red">Only {{ hotel.roomLeft }} rooms left at this price on our site</v-chip>
                                        <v-chip v-for="(tag, index) in hotel.tags" :key="index" variant="flat" color="#ebfff7" size="small" class="text-green">{{ tag }}</v-chip>
                                    </div>
                                </v-card-item>
                            </v-card>
                        </v-col>
                        <v-col cols="3">
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
                                    <div class="text-xs text-gray-500 mb-1">5 {{ $t('hotel.nights') }}, 2 {{ $t('hotel.adults') }}</div>
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
    </v-container>
</template>

<script>
import { useHotelStore } from '~/stores/hotel'
import { useMainStore } from '~/stores/main'
import { computed } from 'vue'

export default {
    setup() {
        const hotelStore = useHotelStore()
        const mainStore = useMainStore()

        const hotels = hotelStore.allHotels
        const currency = computed(() => mainStore.currency)

        const getPrice = (prices) => {
            const price = prices.find(p => p.currency === currency.value)
            const tax = calTax(price)
            return price ? `${(price.amount + tax)} ${price.currency}` : 0
        }

        const calTax = (price) => {
            const tax = (price.amount * 13) / 100
            return tax
        }

        return {
            hotels,
            currency,
            getPrice
        }
    }
}
</script>

<style scoped>
.v-card-title,
.v-card-subtitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>