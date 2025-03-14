import { defineStore } from 'pinia'

export const useCurrencyStore = defineStore('currency', {
  state: () => ({
    currency: 'KSH', // Default currency
    exchangeRate: 150, // Example exchange rate from USD to KSH (you can update it dynamically)
  }),
  actions: {
    toggleCurrency() {
      this.currency = this.currency === 'KSH' ? 'USD' : 'KSH'
    },
    // Optionally, you can fetch the exchange rate dynamically from an API
    setExchangeRate(rate) {
      this.exchangeRate = rate
    },
  },
  getters: {
    formattedPrice: (state) => (price) => {
      if (state.currency === 'USD') {
        return `$${price.toFixed(2)}`
      } else {
        return `KSh ${(price * state.exchangeRate).toFixed(2)}`
      }
    },
  },
})
