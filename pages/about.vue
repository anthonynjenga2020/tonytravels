<template>
  <div>
    <!-- Hero Section -->
    <section class="relative w-full h-[300px]">
      <nuxt-img
        src="/img/13.jpg"
        alt="About Hero"
        class="w-1/20 h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
      >
        <h1
          class="text-white text-4xl md:text-5xl font-extrabold tracking-wide animate-fade-in"
        >
          About Us
        </h1>
      </div>
    </section>

    <!-- About Content Section -->
    <section class="container mx-auto px-6 py-16">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="animate-slide-up">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p class="text-base text-gray-700 leading-relaxed mb-4">
            We are passionate about creating unforgettable travel experiences.
            Our mission is to bring you the best tours and adventures around the
            world.
          </p>
          <p class="text-base text-gray-700 leading-relaxed">
            With years of experience and a dedicated team, we carefully craft
            each tour to ensure the perfect balance of adventure, relaxation,
            and cultural immersion.
          </p>
        </div>
        <div>
          <nuxt-img
            src="/img/10.jpg"
            alt="Our Team"
            class="w-full h-[250px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">
          Why Choose Us?
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Card -->
          <div
            class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Icon
              name="uil:globe"
              class="text-blue-500 w-12 h-12 mb-3 animate-float"
            />
            <h3 class="text-lg font-semibold text-gray-900 mb-1">
              Global Reach
            </h3>
            <p class="text-gray-600 leading-relaxed text-sm">
              Our network spans across continents, bringing you the best global
              destinations.
            </p>
          </div>

          <!-- Card -->
          <div
            class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Icon
              name="uil:award"
              class="text-blue-500 w-12 h-12 mb-3 animate-float"
            />
            <h3 class="text-lg font-semibold text-gray-900 mb-1">
              Expert Guides
            </h3>
            <p class="text-gray-600 leading-relaxed text-sm">
              Our experienced guides ensure that your journey is smooth and
              insightful.
            </p>
          </div>

          <!-- Card -->
          <div
            class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Icon
              name="uil:smile"
              class="text-blue-500 w-12 h-12 mb-3 animate-float"
            />
            <h3 class="text-lg font-semibold text-gray-900 mb-1">
              Customer Satisfaction
            </h3>
            <p class="text-gray-600 leading-relaxed text-sm">
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

<style scoped>
/* Fade-in animation */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

/* Slide-up animation */
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out;
}

/* Floating animation for icons */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
