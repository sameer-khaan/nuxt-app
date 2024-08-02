import { defineStore } from 'pinia'

const passengers = [
  { value: 1, text: '1 Passenger' },
  { value: 2, text: '2 Passengers' },
  { value: 3, text: '3 Passengers' }
]
const classType = [
  { value: 'economy', text: 'Economy' },
  { value: 'business', text: 'Business' },
  { value: 'firstClass', text: 'First Class' }
]

export const useSearchStore = defineStore('search', {
  state: () => ({
    showDetails: false,
    tripType: 'oneWay',
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    classType: 'economy',
    passengerOptions: passengers,
    classTypeOptions: classType
  }),
  actions: {
    setSearchDetails(details) {
      this.showDetails = true
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