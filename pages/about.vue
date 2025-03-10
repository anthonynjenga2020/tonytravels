<template>
    <div>
      <!-- Hero Section -->
      <section class="relative w-full h-[400px]">
        <nuxt-img src="/img/9.jpg" alt="About Hero" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 class="text-white text-5xl font-bold">About Us</h1>
        </div>
      </section>
  
      <!-- About Content Section -->
      <section class="container mx-auto px-4 py-16">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Who We Are</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              We are passionate about creating unforgettable travel experiences. Our mission is to bring you the best tours and adventures around the world.
            </p>
            <p class="text-gray-700 leading-relaxed">
              With years of experience and a dedicated team, we carefully craft each tour to ensure the perfect balance of adventure, relaxation, and cultural immersion.
            </p>
          </div>
          <div>
            <nuxt-img src="/img/10.jpg" alt="Our Team" class="w-full h-96 object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
  
      <!-- Why Choose Us Section -->
      <section class="bg-gray-100 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="flex flex-col items-center">
              <Icon name="uil:globe" class="text-blue-500 w-16 h-16 mb-4" />
              <h3 class="text-xl font-semibold mb-2">Global Reach</h3>
              <p class="text-gray-600 text-center">
                Our network spans across continents, bringing you the best global destinations.
              </p>
            </div>
  
            <div class="flex flex-col items-center">
              <Icon name="uil:award" class="text-blue-500 w-16 h-16 mb-4" />
              <h3 class="text-xl font-semibold mb-2">Expert Guides</h3>
              <p class="text-gray-600 text-center">
                Our experienced guides ensure that your journey is smooth and insightful.
              </p>
            </div>
  
            <div class="flex flex-col items-center">
              <Icon name="uil:smile" class="text-blue-500 w-16 h-16 mb-4" />
              <h3 class="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p class="text-gray-600 text-center">
                We take pride in delivering memorable and enjoyable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    title: 'About Us'
  })
  </script>
  