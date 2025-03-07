<template>
    <section class="relative h-screen flex items-center justify-center bg-cover bg-center text-white" 
      style="background-image: url('/img/2.jpg');">
      
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div class="relative z-10 text-center w-full px-6 md:px-0">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight">Find Your Perfect Trip</h1>
        <p class="mt-4 text-lg md:text-xl">Discover amazing places at exclusive deals</p>
        
        <!-- Search Form -->
        <div class="mt-6 max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-lg text-gray-900 flex flex-wrap items-center">
          <input type="text" placeholder="Where to?" class="flex-1 p-3 border rounded-lg outline-none" />
          <input type="date" class="mx-2 p-3 border rounded-lg outline-none" />
          <button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
    </section>
  </template>
  