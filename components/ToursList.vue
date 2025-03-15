<template>
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold mb-6">Get inspired for your next trip</h2>
      
      <!-- Flexbox Layout -->
      <div class="flex flex-wrap gap-6">
        <TourCard 
          v-for="tour in tours" 
          :key="tour.id" 
          :tour="tour" 
          class="w-1/2 sm:w-1/2 lg:w-1/3" 
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import TourCard from './TourCard.vue'
  
  defineProps({
    tours: {
      type: Array,
      required: true
    }
  })
  </script>
  