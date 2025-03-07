<template>
    <section class="container mx-auto py-12 px-4">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img :src="tour.image" :alt="tour.title" class="w-full h-96 object-cover">
        
        <div class="p-6">
          <h1 class="text-3xl font-bold">{{ tour.title }}</h1>
          <p class="text-gray-600 mt-2">Starting from ${{ tour.price }}</p>
          <p class="mt-4 text-gray-700">{{ tour.description }}</p>
          

        <!-- Booking Form Component -->
        <BookingForm />
          <!-- <div class="mt-6 flex items-center space-x-4">
            <button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Book Now
            </button>
            <NuxtLink to="/tours" class="text-blue-500 hover:underline">Back to Tours</NuxtLink>
          </div> -->
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const tour = ref({});
  
  onMounted(() => {
    const tourData = [
      { id: 1, title: 'Safari Adventure', image: '/img/4.jpg', price: 500, description: 'Experience the wild like never before.' },
      { id: 2, title: 'Mountain Trekking', image: '/img/5.jpg', price: 750, description: 'Climb the tallest peaks and enjoy breathtaking views.' },
      { id: 3, title: 'Beach Escape', image: '/img/6.jpg', price: 600, description: 'Relax on sandy beaches and soak in the sun.' }
    ];
    
    tour.value = tourData.find(t => t.id == route.params.id);
  });
  </script>
  