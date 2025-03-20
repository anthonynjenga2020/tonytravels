<template>
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row md:justify-between mb-12">
          <div class="max-w-lg">
            <h1 class="text-4x2 font-bold text-gray-900">Why choose us</h1>
            <p class="mt-4 text-gray-600">
              Cras gravida bibendum dolor eu varius. Morbi fermentum velit nisi, eget vehicula lorem sodales eget. Donec quis volutpat orci.
            </p>
            <button class="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
              Learn More
            </button>
          </div>
        </div>
  
        <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(item, index) in reasons" 
            :key="index"
            :class="index % 2 === 0 ? 'bg-pink-100' : 'bg-blue-100'"
            class="p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 class="text-xl font-bold text-gray-900">A reason</h3>
            <p class="mt-2 text-gray-600">
              Cras gravida bibendum dolor eu varius. Morbi fermentum velit nisi, eget vehicula lorem sodales eget. Donec quis volutpat orci.
            </p>
            <div class="mt-4">
              <button class="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                <Icon name="uil:arrow-right" class="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  
  <script setup>
  const reasons = Array(3).fill('') // Create 6 placeholder items
  </script>
  
  