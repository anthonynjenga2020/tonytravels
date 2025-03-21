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
      <!-- <div><TestimonialSection /></div> -->
      <!-- Card Section -->
      <div class="flex space-x-4">
    <ParallaxCard data-image="/img/3.jpg">
      <template #header>
        <h1 class="text-xl font-bold">CULTURE</h1>
      </template>
      <template #content>
        <p class="mt-2">Card description goes here...</p>
      </template>
    </ParallaxCard>
    <ParallaxCard data-image="/img/2.jpg">
      <template #header>
        <h1 class="text-xl font-bold">SAFARI</h1>
      </template>
      <template #content>
        <p class="mt-2">Another description...</p>
      </template>
    </ParallaxCard>
    <ParallaxCard data-image="/img/23.jpg">
      <template #header>
        <h1 class="text-xl font-bold">GETAWAY</h1>
      </template>
      <template #content>
        <p class="mt-2">Another description...</p>
      </template>
    </ParallaxCard>
    <ParallaxCard data-image="/img/24.jpg">
      <template #header>
        <h1 class="text-xl font-bold">MOUNTAIN</h1>
      </template>
      <template #content>
        <p class="mt-2">Another description...</p>
      </template>
    </ParallaxCard>
    <ParallaxCard data-image="/img/26.jpg">
      <template #header>
        <h1 class="text-xl font-bold">WATERFALLS</h1>
      </template>
      <template #content>
        <p class="mt-2">Another description...</p>
      </template>
    </ParallaxCard>
  </div>

    </div>
  </template>
  
  <script setup>
  
  import ToursList from '~/components/ToursList.vue'
  import BlogList from '@/components/BlogList.vue'
  import WhyChooseUs from '@/components/WhyChooseUs.vue'
  import ParallaxCard from '@/components/ParallaxCard.vue';

  </script>
  