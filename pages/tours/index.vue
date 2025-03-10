<template>
    <div class="container mx-auto py-12">
      <h1 class="text-4xl font-bold mb-6">Explore Our Tours</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TourCard 
          v-for="tour in tours" 
          :key="tour.id" 
          :tour="tour" 
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { collection, getDocs } from 'firebase/firestore'
  import { db }from '~/plugins/firebase'
  import TourCard from '~/components/TourCard.vue'
  
  const tours = ref([])
  
  onMounted(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'tours'))
      tours.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      console.log('Tours:', tours.value) // ✅ See the data in the console
    } catch (error) {
      console.error('Error fetching tours:', error)
    }
  })
  </script>
  