<template>
    <div>
      <HeroSection />
      <div>
    <WhyChooseUs />
  </div>
  
      <!-- Featured Tours Section -->
      <section class="py-12 container mx-auto">
        <!-- <h2 class="text-3xl font-bold text-center mb-8">Featured Tours</h2> -->
        <div>
          <ToursList :tours="tours" />
          
        </div>
        <!-- Blog Section -->
        <div><BlogList /></div>
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
  
  import ToursList from '~/components/ToursList.vue'
  import BlogList from '@/components/BlogList.vue'
  import WhyChooseUs from '@/components/WhyChooseUs.vue'

  </script>
  