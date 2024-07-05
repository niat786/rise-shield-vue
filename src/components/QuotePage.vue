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

        <div class="w-full xl:w-2/3">
          <!-- form  -->
          <div class="py-3 lg:px-5">
            <h2 class="text-xl md:text-2xl md:pr-5">Choose your cover</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10">
              <!-- card 1 -->

              <div
                class="border-[#8c8c8c] dark:border-gray-600 border-4 md:border-[4px] rounded-3xl w-full"
              >
                <div class="px-2 md:px-3 lg:px-5 lg:py-4 flex flex-col space-y-4 items-center">
                  <h3 class="text-xl font-semibold text-center mt-2">Tier 1 Cover</h3>
                  <p class="text-xl text-center text-red-500">$60</p>

                  <button class="px-10 py-2 rounded-lg bg-red-500 text-white text-md">
                    SELECT
                  </button>
                  <a
                    href="#"
                    class="px-8 rounded-full bg-white border border-red-500 dark:bg-red-500 dark:text-white text-red-500 text-sm"
                  >
                    Policy Info
                  </a>
                </div>

                <div class="flex flex-col px-2 w-full text-sm space-y-1 border-t-2 border-gray-400">
                  <div class="key-value flex justify-between py-1">
                    <div class="key">Policy Excess</div>
                    <div class="value">$140</div>
                  </div>

                  <div class="key-value flex justify-between py-1 bg-gray-100">
                    <div class="key">Medical & Repatriation</div>
                    <div class="value">$2,000,000</div>
                  </div>

                  <div class="key-value flex justify-between py-1">
                    <div class="key">Emergency Dental</div>
                    <div class="value">$350</div>
                  </div>

                  <div class="key-value flex justify-between py-1 bg-gray-100">
                    <div class="key">Cancellation</div>
                    <div class="value">x</div>
                  </div>

                  <div class="key-value flex justify-between py-1">
                    <div class="key">Curtailment</div>
                    <div class="value">x</div>
                  </div>

                  <div class="key-value flex justify-between py-1 bg-gray-100">
                    <div class="key">Personal Liability</div>
                    <div class="value">$1,000,000</div>
                  </div>

                  <div class="key-value flex justify-between py-1">
                    <div class="key">Personal Accident</div>
                    <div class="value">$10,000</div>
                  </div>

                  <div class="key-value flex justify-between py-1 bg-gray-100">
                    <div class="key">Baggage</div>
                    <div class="value">$1,000</div>
                  </div>

                  <div class="key-value flex justify-between py-1">
                    <div class="key">Airline Failure</div>
                    <div class="value">$1,000</div>
                  </div>

                  <div class="key-value flex mx-auto py-1 relative">
                    <a href="" class="px-5 py-2 rounded-xl my-2 border-red-500 border-2"
                      >What else do we cover?</a
                    >
                    <span class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#EE2C4F"
                        class="size-5 -translate-y-1 peer"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        class="peer-hover:block hidden rounded-xl p-4 min-w-80 shadow-lg border-red bg-white dark:bg-gray-700 dark:text-gray-50 z-50 absolute text-sm border-[3px] translate-x-5 translate-y-5"
                      >
                        If the user selects an annual Multi-Trip in step one the end date defaults
                        to a year from the start date.
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <!-- card 1 ends -->

              <!-- card 2 -->

              <div
                class="border-[#8c8c8c] dark:border-gray-600 border-4 md:border-[4px] rounded-3xl w-full"
              >
                <div class="px-2 md:px-3 lg:px-5 lg:py-4 flex flex-col space-y-4 items-center">
                  <h3 class="text-xl font-semibold text-center mt-2">Tier 2 Cover</h3>
                  <p class="text-xl text-center text-red-500">$80</p>

                  <button class="px-10 py-2 rounded-lg bg-red-500 text-white text-md">
                    SELECT
                  </button>
                  <a
                    href="#"
                    class="px-8 rounded-full bg-white border border-red-500 dark:bg-red-500 dark:text-white text-red-500 text-sm"
                  >
                    Policy Info
                  </a>
                </div>

                <div class="flex flex-col px-2 w-full text-sm space-y-1 border-t-2 border-gray-400">
                  <div class="key-value flex justify-between py-1">
                    <div class="key">Policy Excess</div>
                    <div class="value">$160</div>
                  </div>

                  <div class="key-value flex justify-between py-1 bg-gray-100">
                    <div class="key">Medical & Repatriation</div>
                    <div class="value">$2,000,000</div>
                  </div>

                  <div class="key-value flex justify-between py-1">
                    <div class="key">Emergency Dental</div>
                    <div class="value">$450</div>
                  </div>

                  <div class="key-value flex justify-between py-1 bg-gray-100">
                    <div class="key">Cancellation</div>
                    <div class="value">x</div>
                  </div>

                  <div class="key-value flex justify-between py-1">
                    <div class="key">Curtailment</div>
                    <div class="value">x</div>
                  </div>

                  <div class="key-value flex justify-between py-1 bg-gray-100">
                    <div class="key">Personal Liability</div>
                    <div class="value">$1,000,000</div>
                  </div>

                  <div class="key-value flex justify-between py-1">
                    <div class="key">Personal Accident</div>
                    <div class="value">$15,000</div>
                  </div>

                  <div class="key-value flex justify-between py-1 bg-gray-100">
                    <div class="key">Baggage</div>
                    <div class="value">$1,200</div>
                  </div>

                  <div class="key-value flex justify-between py-1">
                    <div class="key">Airline Failure</div>
                    <div class="value">$1,000</div>
                  </div>

                  <div class="key-value flex mx-auto py-1 relative">
                    <a href="" class="px-5 py-2 rounded-xl my-2 border-red-500 border-2"
                      >What else do we cover?</a
                    >
                  </div>
                </div>
              </div>
              <!-- card 2 ends -->
            </div>
          </div>
          <!-- form ends -->
        </div>
      </div>
    </div>
    <!-- next button starts -->
    <div class="md:-translate-y-0 xl:-translate-y-10">
      <NextButton link="extras"></NextButton>
    </div>
    <!-- next button ends -->
  </section>
</template>
