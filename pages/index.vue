<template>
    <div>
      <HeroSection />
  
      <!-- Featured Tours Section -->
      <section class="py-12 container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">Featured Tours</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TourCard v-for="tour in tours" :key="tour.id" :tour="tour" />
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section class="py-12 bg-gray-100">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8">What Our Customers Say</h2>
          <p>⭐⭐⭐⭐⭐ "Best travel experience ever!"</p>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import TourCard from '@/components/TourCard.vue';
  
  // Dummy data for featured tours (replace with Firebase data later)
  const tours = [
    { id: 1, title: 'Safari Adventure', image: '/img/3.jpg', price: 500 },
    { id: 2, title: 'Mountain Trekking', image: '/img/1.jpg', price: 750 },
    { id: 3, title: 'Beach Escape', image: '/img/2.jpg', price: 600 }
  ];
  </script>
  