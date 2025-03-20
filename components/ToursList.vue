<template>
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold mb-6">Get inspired for your next trip</h2>
      
      <!-- Flexbox Layout -->
      <div v-if="tours.length" class="flex flex-wrap gap-6">
        <TourCard 
          v-for="tour in tours" 
          :key="tour.id" 
          :tour="tour" 
          class="w-1/2 sm:w-1/2 lg:w-1/3" 
        />
      </div>
      <p v-else>Loading tours...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { collection, getDocs } from 'firebase/firestore'
  import db from '@/plugins/firebase'
  import TourCard from './TourCard.vue'
  
  const tours = ref([])
  
  // Fetch tours from Firestore
  const fetchTours = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'tours'))
      tours.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (error) {
      console.error('Error fetching tours:', error)
    }
  }
  
  onMounted(fetchTours)
  </script>
  