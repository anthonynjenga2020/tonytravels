<template>
    <div class="container mx-auto px-4 py-8">
      <div v-if="tour" class="max-w-4xl mx-auto">
        <!-- Tour Image -->
        <nuxt-img :src="tour.image" alt="Tour image" class="w-full h-64 object-cover rounded-lg mb-6" />
  
        <!-- Tour Title -->
        <h1 class="text-4xl font-bold mb-4">{{ tour.title }}</h1>
        
        <!-- Tour Details -->
        <div class="flex items-center space-x-4 text-gray-500 text-sm mb-6">
          <span>{{ tour.location }}</span>
          <span>·</span>
          <span>{{ formatDate(tour.date) }}</span>
          <span>·</span>
          <span>${{ tour.price }}</span>
        </div>
  
        <!-- Tour Description -->
        <div class="prose max-w-none mb-6" v-html="tour.description"></div>
  
        <!-- Booking Form -->
        <BookingForm :tour-id="route.params.id" />
      </div>
  
      <div v-else>
        <p>Loading tour details...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { doc, getDoc } from 'firebase/firestore'
  import { db } from '~/plugins/firebase'
  import BookingForm from '~/components/BookingForm.vue'
  
  const route = useRoute()
  const tour = ref(null)
  
  const fetchTour = async () => {
    try {
      const docRef = doc(db, 'tours', route.params.id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        tour.value = docSnap.data()
      } else {
        console.error('Tour not found')
      }
    } catch (error) {
      console.error('Error fetching tour:', error)
    }
  }
  
  const formatDate = (timestamp) => {
    if (!timestamp) return ''
    const date = timestamp.toDate()
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }
  
  onMounted(fetchTour)
  </script>
  