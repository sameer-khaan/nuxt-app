import { defineStore } from 'pinia'
import flights from '~/data/flights.json'

export const useFlightStore = defineStore('flight', {
  state: () => ({
    flights: flights
  }),
  getters: {
    allFlights: (state) => state.flights
  }
})