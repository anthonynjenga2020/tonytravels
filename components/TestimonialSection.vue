<template>
    <div class="w-full py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-3xl font-bold text-gray-900">What our partners say</h2>
            <a href="#" class="text-blue-600 hover:underline">Reviews →</a>
          </div>
          <div class="flex items-center gap-2">
            <button @click="prevSlide" class="text-gray-500 hover:text-gray-900">←</button>
            <span class="text-gray-500">{{ currentSlide + 1 }} / {{ testimonials.length }}</span>
            <button @click="nextSlide" class="text-gray-500 hover:text-gray-900">→</button>
          </div>
        </div>
  
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-700 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="flex-shrink-0 w-full"
            >
              <blockquote class="text-lg text-gray-700 leading-relaxed mb-6">
                "{{ testimonial.quote }}"
              </blockquote>
              <div class="flex items-center gap-4">
                <img :src="testimonial.image" alt="Profile picture" class="w-12 h-12 rounded-full" />
                <div>
                  <p class="font-semibold text-gray-900">{{ testimonial.name }}</p>
                  <p class="text-sm text-gray-500">{{ testimonial.position }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const testimonials = ref([
    {
      quote: 'I have impossibly high expectations, and the talented team at Ramotion didn\'t disappoint. They delivered thoughtful, polished designs, and code that made an outsized, positive business impact by dramatically increasing our customers\' ability to find and understand support site content.',
      name: 'Brian Beaver',
      position: 'VP of Design at Turo',
      image: '/img/1.jpg'
    },
    {
      quote: 'InboundLabs helped me to find the weak points of our web presence. It is important to get an external view of your strategy and they have helped us so much in this point. Highly recommended.',
      name: 'Sergio Gazeau',
      position: 'Digital Marketing Manager at Company',
      image: '/img/2.jpg'
    }
  ])
  
  const currentSlide = ref(0)
  
  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % testimonials.value.length
  }
  
  const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + testimonials.value.length) % testimonials.value.length
  }
  </script>
  