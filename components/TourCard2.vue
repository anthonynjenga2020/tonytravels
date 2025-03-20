<template>
    <div class="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 flex">
      <!-- Left Column: Image -->
      <NuxtLink :to="`/tours/${tour.id}`" class="relative w-1/6">
        <img
          :src="tour.image"
          :alt="tour.title"
          class="w-full h-full object-cover "
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
  
      <!-- Middle Column: Tour Details -->
      <div class="p-8 flex-1 flex flex-col justify-between">
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
        <!-- Description -->
        <p class="text-gray-500 text-sm mt-2 line-clamp-2">
          {{ tour.description }}
        </p>
      </div>
  
      <!-- Right Column: Price & Duration -->
      <div class="p-4 w-1/4 flex flex-col justify-between items-end">
        <!-- Discount Tag -->
        <div 
          v-if="tour.discount" 
          class="absolute top-0 right-0 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-xl"
        >
          -{{ tour.discount }}%
        </div>
        <!-- Price -->
        <div>
          <div class="text-gray-400 line-through text-sm" v-if="tour.oldPrice">
            {{ formatPrice(tour.oldPrice) }}
          </div>
          <div class="text-lg font-bold">
            From {{ formatPrice(tour.price) }}
          </div>
          <!-- Duration -->
          <div class="text-sm text-gray-500 flex items-center mt-1">
            <Icon name="uil:clock" class="mr-1" />
            {{ tour.duration }} days
          </div>
        </div>
        <!-- View Details Button -->
        <NuxtLink 
          :to="`/tours/${tour.id}`" 
          class="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg mt-4 hover:bg-blue-600"
        >
          View details
        </NuxtLink>
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
  