<template>
  <footer class="bg-gray-50 py-10">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Support Section -->
        <div>
          <h3 class="font-semibold text-gray-800 mb-4">Support</h3>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li><a href="#" class="hover:text-gray-900">Help Center</a></li>
            <li>
              <a href="#" class="hover:text-gray-900"
                >Our COVID-19 Response</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-gray-900"
                >Cancellation options</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-gray-900">Safety information</a>
            </li>
          </ul>
        </div>

        <!-- Company Section -->
        <div>
          <h3 class="font-semibold text-gray-800 mb-4">Company</h3>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li><a href="#" class="hover:text-gray-900">About us</a></li>
            <li>
              <a href="#" class="hover:text-gray-900">Community Blog</a>
            </li>
            <li><a href="#" class="hover:text-gray-900">Careers</a></li>
            <li>
              <a href="#" class="hover:text-gray-900">Privacy policy</a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-900">Terms of service</a>
            </li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div>
          <h3 class="font-semibold text-gray-800 mb-4">Contact</h3>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li><a href="#" class="hover:text-gray-900">Partnerships</a></li>
            <li><a href="#" class="hover:text-gray-900">FAQ</a></li>
            <li><a href="#" class="hover:text-gray-900">Get in touch</a></li>
          </ul>
        </div>

        <!-- Social Section -->
        <div>
          <h3 class="font-semibold text-gray-800 mb-4">Social</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-500 hover:text-blue-500">
              <Icon name="uil:facebook" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-500 hover:text-blue-400">
              <Icon name="uil:twitter" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-500 hover:text-pink-500">
              <Icon name="uil:instagram" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-500 hover:text-red-500">
              <Icon name="uil:youtube" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        class="mt-8 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between"
      >
        <p class="text-gray-500 text-sm">
          &copy; {{ new Date().getFullYear() }} TravelSite. All rights reserved.
        </p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <nuxt-img
            src="/img/visa.png"
            alt="Visa"
            class="h-6 w-auto"
          />
          <nuxt-img
            src="/img/mastercard.png"
            alt="Mastercard"
            class="h-6 w-auto"
          />
          <nuxt-img
            src="/img/discover.png"
            alt="Discover"
            class="h-6 w-auto"
          />
          <nuxt-img
            src="/img/paypal.png"
            alt="Paypal"
            class="h-6 w-auto"
          />
          <nuxt-img
            src="/img/amex.png"
            alt="Amex"
            class="h-6 w-auto"
          />
        </div>
      </div>
    </div>
  </footer>
</template>



