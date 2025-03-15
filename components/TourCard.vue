<template>
  <div class="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
    <!-- Image & Overlay -->
    <NuxtLink :to="`/tours/${tour.id}`" class="block relative">
      <img 
        :src="tour.image" 
        :alt="tour.title" 
        class="w-full h-48 object-cover"
      />
      <!-- Featured Badge -->
      <div 
        v-if="tour.featured" 
        class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
      >
        Featured
      </div>
      <!-- Favorite Button -->
      <div class="absolute top-2 right-2">
        <Icon name="uil:heart" class="text-white text-xl cursor-pointer" />
      </div>
      <!-- Profile Picture -->
      <img 
        :src="tour.authorImage" 
        alt="Author" 
        class="absolute bottom-2 right-2 w-10 h-10 rounded-full border-2 border-white"
      />
    </NuxtLink>

    <!-- Tour Details -->
    <div class="p-4">
      <!-- Location -->
      <div class="flex items-center space-x-2 text-gray-500 text-sm mb-1">
        <Icon name="uil:map-marker" class="text-gray-400" />
        <span>{{ tour.location }}</span>
      </div>
      <!-- Title -->
      <NuxtLink :to="`/tours/${tour.id}`">
        <h2 class="text-lg font-bold text-gray-800 hover:text-blue-500">
          {{ tour.title }}
        </h2>
      </NuxtLink>
      <!-- Rating -->
      <div class="flex items-center space-x-1 text-yellow-500 text-sm mt-1">
        <Icon name="uil:star" />
        <span>{{ tour.rating }}</span>
        <span class="text-gray-500">({{ tour.reviews }} Reviews)</span>
      </div>
      <!-- Price & Duration -->
      <div class="flex justify-between items-center mt-3">
        <div class="text-gray-400 line-through" v-if="tour.oldPrice">
          {{ formatPrice(tour.oldPrice) }}
        </div>
        <div class="text-lg font-bold">
          From {{ formatPrice(tour.price) }}
        </div>
        <div class="text-sm text-gray-500">{{ tour.duration }} days</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCurrencyStore } from '@/stores/currency'

// Props
defineProps({
  tour: {
    type: Object,
    required: true
  }
})

const currencyStore = useCurrencyStore()

const formatPrice = (price) => {
  if (currencyStore.currency === 'USD') {
    return `$${price}`
  } else {
    const convertedPrice = price * currencyStore.exchangeRate
    return `KSH ${convertedPrice.toLocaleString()}`
  }
}
</script>
