<script setup>
import ProgressBarComponent from './ProgressBarComponent.vue'
import SidebarCard from './SidebarCard.vue'
import NextButton from './NextButton.vue'
</script>

<template>
  <section class="p-2 sm:p-5 lg:px-0 xl:p-20 md:mt-32 lg:mt-6 max-w-[110rem] mx-auto">
    <div class="sidebar grid grid-cols-1 lg:grid-cols-4 gap-y-10 gap-5 grid-rows-1">
      <!-- sidebar card starts -->

      <SidebarCard></SidebarCard>
      <!-- sidebar card ends -->

      <div class="col-span-3 flex flex-col space-y-6 text-center lg:text-left">
        <div class="flex justify-stretch">
          <ProgressBarComponent></ProgressBarComponent>
        </div>

        <h2 class="text-xl md:text-2xl md:px-5">What type of trip are you planning?</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-0">
          <!-- card 1 -->
          <div class="py-3 lg:px-5">
            <div
              class="border-[#8c8c8c] dark:border-gray-600 border-4 md:border-[4px] rounded-3xl w-full min-h-96 flex flex-col space-y-4 px-2 md:px-3 lg:px-5 lg:py-4 items-center"
            >
              <h3 class="text-xl font-semibold text-center mt-2">One-Way Trip</h3>
              <label
                for="toggleOne"
                class="flex items-center cursor-pointer select-none text-dark dark:text-white"
              >
                <div class="relative">
                  <input type="checkbox" id="toggleOne" class="peer sr-only" />
                  <div class="block h-7 rounded-full dark:bg-gray-600 bg-gray-200 w-12"></div>
                  <div
                    class="absolute w-5 h-5 transition bg-gray-400 rounded-full dot dark:bg-dark-4 left-1 top-1 peer-checked:translate-x-full peer-checked:bg-[#EE2C4F]"
                  ></div>
                </div>
              </label>
              <p class="font-md min-h-24 text-center pt-4">
                Going on a one-way trip? This is the perfect travel insurance for you.
              </p>

              <div class="icon px-10 pt-5">
                <img src="/plane-t.png" alt="plane-icon" class="w-24" />
              </div>
            </div>
          </div>
          <!-- card 1 ends -->

          <!-- card 2 -->
          <div class="py-3 lg:px-5">
            <div
              class="border-red border-4 md:border-[4px] rounded-3xl w-full min-h-96 flex flex-col space-y-4 px-2 md:px-3 lg:px-5 lg:py-4 items-center"
            >
              <h3 class="text-xl font-semibold text-center mt-2">Single Trip</h3>
              <label
                for="toggleTwo"
                class="flex items-center cursor-pointer select-none text-dark dark:text-white"
              >
                <div class="relative">
                  <input type="checkbox" id="toggleTwo" class="peer sr-only" checked />
                  <div class="block h-7 rounded-full dark:bg-gray-600 bg-gray-200 w-12"></div>
                  <div
                    class="absolute w-5 h-5 transition bg-gray-400 rounded-full dot dark:bg-dark-4 left-1 top-1 peer-checked:translate-x-full peer-checked:bg-[#EE2C4F]"
                  ></div>
                </div>
              </label>
              <p class="font-md min-h-24 text-center pt-4">
                Ensure you're covered for your upcoming leisure or business trip with our reliable
                travel insurance.
              </p>

              <div class="icon px-10 pt-5">
                <img src="/plane-2.png" alt="plane-icon" class="w-24" />
              </div>
            </div>
          </div>
          <!-- card 2 ends -->

          <!-- card 3 -->
          <div class="py-3 lg:px-5">
            <div
              class="border-[#8c8c8c] dark:border-gray-600 border-4 md:border-[4px] rounded-3xl w-full min-h-96 flex flex-col space-y-4 px-2 md:px-3 lg:px-5 lg:py-4 items-center"
            >
              <h3 class="text-xl font-semibold text-center mt-2">Annual Multi-Trip</h3>
              <label
                for="toggleThree"
                class="flex items-center cursor-pointer select-none text-dark dark:text-white"
              >
                <div class="relative">
                  <input type="checkbox" id="toggleThree" class="peer sr-only" checked />
                  <div class="block h-7 rounded-full dark:bg-gray-600 bg-gray-200 w-12"></div>
                  <div
                    class="absolute w-5 h-5 transition bg-gray-400 rounded-full dot dark:bg-dark-4 left-1 top-1 peer-checked:translate-x-full peer-checked:bg-[#EE2C4F]"
                  ></div>
                </div>
              </label>
              <p class="font-md min-h-24 text-center pt-4">
                Insure all the trips (up to 60 days) that you take in one year.
              </p>

              <div class="icon px-10 pt-5">
                <img src="/plane-3.png" alt="plane-icon" class="w-24" />
              </div>
            </div>
          </div>
          <!-- card 3 ends -->
        </div>
      </div>
    </div>
    <!-- next button starts -->
    <div class="md:-translate-y-16 xl:-translate-y-20">
      <NextButton link="/trip-details"></NextButton>
    </div>
    <!-- next button ends -->
  </section>
</template>
