import { defineStore } from 'pinia'
import hotels from '~/data/hotels.json'

export const useHotelStore = defineStore('hotel', {
    state: () => ({
        hotels: hotels
    }),
    getters: {
        allHotels: (state) => state.hotels
    }
})