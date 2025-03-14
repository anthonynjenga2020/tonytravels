<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden">
    <NuxtLink :to="`/tours/${tour.id}`">
      <img 
        :src="tour.image" 
        :alt="tour.title" 
        class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      />
    </NuxtLink>
    <div class="p-4">
      <NuxtLink :to="`/tours/${tour.id}`">
        <h2 class="text-xl font-bold hover:text-blue-500">{{ tour.title }}</h2>
      </NuxtLink>
      <p class="text-gray-600">{{ tour.location }}</p>
      <p class="text-gray-700 mt-2">{{ tour.description }}</p>
      <div class="flex justify-between items-center mt-4">
        <!-- Display Price Based on Selected Currency -->
        <span class="text-lg font-bold">
          {{ formatPrice(tour.price) }}
        </span>
        <span class="text-sm text-yellow-500">
          {{ tour.rating }} ⭐
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCurrencyStore } from '@/stores/currency'

// Props
defineProps({
  tour: {
    type: Object,
    required: true
  }
})

// Access Pinia state for currency
const currencyStore = useCurrencyStore()

const formatPrice = (price) => {
  if (currencyStore.currency === 'USD') {
    return `$${price}` // USD
  } else {
    // Convert USD to KSH based on exchange rate
    const convertedPrice = price * currencyStore.exchangeRate
    return `KSH ${convertedPrice.toLocaleString()}`
  }
}
</script>
