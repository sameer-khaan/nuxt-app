import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({
    tripType: 'oneWay',
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: '1 Passenger',
    classType: 'Economy',
  }),
  actions: {
    setSearchDetails(details) {
      this.tripType = details.tripType
      this.origin = details.origin
      this.destination = details.destination
      this.departureDate = details.departureDate
      this.returnDate = details.returnDate
      this.passengers = details.passengers
      this.classType = details.classType
    }
  }
})