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

        <div class="w-full lg:w-2/3">
          <!-- form 1 -->
          <div class="py-3 lg:px-5">
            <h2 class="text-xl md:text-2xl md:pr-5">Where are you going?</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10">
              <div class="group w-full">
                <label
                  for="your-residence"
                  class="flex mb-2 text-sm font-base leading-6 text-gray-900 dark:text-gray-50"
                  >Your residence

                  <span class="flex justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#EE2C4F"
                      class="size-5 -translate-y-3 has-tooltip peer"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span
                      class="peer-hover:block hidden rounded-xl p-4 max-w-80 min-h-28 shadow-lg border-red bg-white dark:bg-gray-700 dark:text-gray-50 z-50 absolute translate-x-3 translate-y-3 text-sm border-[3px]"
                    >
                      Your country of residence is your legal residence and where we would take you
                      in case repatriation is need due to illness or/and accident.
                    </span>
                  </span>
                </label>
                <div class="relative group">
                  <button
                    class="flex items-center justify-between transform dark:bg-gray-700 dark:border-gray-500 focus:border-red-500 dark:text-gray-50 h-10 pl-3 pr-2 border peer focus:outline-none focus:rounded-b-none rounded-lg w-full"
                  >
                    <span class="text-sm leading-none"> Your residence </span>
                    <svg
                      class="w-4 h-4 mt-px ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    class="absolute hidden rounded space-y-1 peer-focus:rounded-t-none w-full peer-focus:border-t-0 flex-col mt-0 border bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-gray-50 shadow-lg peer-focus:flex"
                  >
                    <a
                      class="flex items-center h-10 px-3 text-sm hover:bg-red-700 hover:text-white"
                      href="#"
                      >Your country of residence</a
                    >
                    <a
                      class="flex items-center h-10 px-3 text-sm hover:bg-red-700 hover:text-white"
                      href="#"
                      >Your country of residence - 2</a
                    >
                  </div>
                </div>
              </div>

              <div class="group">
                <label
                  for="your-destination"
                  class="text-sm mb-2 flex font-base leading-6 text-gray-900 dark:text-gray-50"
                  >Your destination
                  <span class="flex justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#EE2C4F"
                      class="size-5 -translate-y-3 has-tooltip peer"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span
                      class="peer-hover:block hidden rounded-xl p-4 max-w-80 min-h-28 shadow-lg border-red bg-white dark:bg-gray-700 dark:text-gray-50 z-50 absolute translate-x-3 translate-y-3 text-sm border-[3px]"
                    >
                      If the user selects an annual Multi-Trip in step one the destination defaults
                      to "World" and can't be changed.
                    </span>
                  </span>
                </label>
                <!-- destination 2-->
                <div class="relative group">
                  <button
                    class="flex items-center justify-between transform dark:bg-gray-700 dark:border-gray-500 focus:border-red-500 dark:text-gray-50 h-10 pl-3 pr-2 border peer focus:outline-none focus:rounded-b-none rounded-lg w-full"
                  >
                    <span class="text-sm leading-none"> Your destination </span>
                    <svg
                      class="w-4 h-4 mt-px ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    class="absolute hidden rounded space-y-1 peer-focus:rounded-t-none w-full peer-focus:border-t-0 flex-col mt-0 border bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-gray-50 shadow-lg peer-focus:flex"
                  >
                    <a
                      class="flex items-center h-10 px-3 text-sm hover:bg-red-700 hover:text-white"
                      href="#"
                      >Your country of destination</a
                    >
                    <a
                      class="flex items-center h-10 px-3 text-sm hover:bg-red-700 hover:text-white"
                      href="#"
                      >Your country of destination - 2</a
                    >
                  </div>
                </div>
                <!-- destination End  -->
              </div>
            </div>
          </div>
          <!-- form 1 ends -->

          <!-- form 2 starts -->
          <div class="py-3 lg:px-5">
            <h2 class="text-xl md:text-2xl md:pr-5 mt-10">When are you going?</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 mt-10">
              <div class="group w-full">
                <label
                  for="start-date"
                  class="flex mb-2 text-sm font-base leading-6 text-gray-900 dark:text-gray-50"
                  >Start Date
                </label>

                <div class="relative">
                  <input
                    id="datepicker-range-start"
                    name="start"
                    type="text"
                    class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full ps-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="10 July, 2024"
                  />
                </div>
              </div>

              <div class="group">
                <label
                  for="end-date"
                  class="mb-2 flex text-sm font-base leading-6 text-gray-900 dark:text-gray-50"
                  >End Date
                  <span class="flex justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#EE2C4F"
                      class="size-5 -translate-y-3 peer"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span
                      class="peer-hover:block hidden rounded-xl p-4 max-w-80 min-h-28 shadow-lg border-red bg-white dark:bg-gray-700 dark:text-gray-50 z-50 absolute translate-x-3 translate-y-3 text-sm border-[3px]"
                    >
                      If the user selects an annual Multi-Trip in step one the end date defaults to
                      a year from the start date.
                    </span>
                  </span>
                </label>
                <!-- destination 2-->
                <div class="relative group">
                  <input
                    id="datepicker-range-end"
                    name="start"
                    type="text"
                    class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full ps-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="Select date start"
                  />
                </div>
                <!-- destination End  -->
              </div>
              <!-- checkbox -->

              <div class="flex w-full content-start">
                <label
                  class="relative mb-2 text-sm flex cursor-pointer items-center p-1 rounded-md"
                >
                  <input
                    type="checkbox"
                    class="peer cursor-pointer appearance-none relative h-4 w-4 bg-gray-50 dark:bg-gray-100/25 hover:bg-gray-800 border border-gray-900 dark:border-gray-100 transition-all checked:border-gray-500 checked:bg-gray-500 rounded"
                  />
                  <div
                    class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </label>

                <label
                  for="check-checkbox"
                  class="flex font-base leading-6 text-gray-900 dark:text-gray-50"
                  >Are You already Traveling?
                  <span class="flex justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#EE2C4F"
                      class="size-5 -translate-y-3 peer"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span
                      class="peer-hover:block hidden rounded-xl p-4 max-w-80 min-h-28 shadow-lg border-red bg-white dark:bg-gray-700 dark:text-gray-50 z-50 absolute translate-x-3 translate-y-3 text-sm border-[3px]"
                    >
                      If the user selects an annual Multi-Trip in step one the end date defaults to
                      a year from the start date.
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <!-- form 2 -->

          <!-- form 3 -->

          <div class="py-3 lg:px-5 mt-5">
            <h2 class="text-xl md:text-2xl md:pr-5">How many people are travelling?</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10">
              <div class="group w-full">
                <label
                  for="your-residence"
                  class="flex mb-2 text-sm font-base leading-6 text-gray-900 dark:text-gray-50"
                  >Number of travellers
                </label>
                <div class="relative">
                  <input
                    id="datepicker-range-start"
                    name="start"
                    type="number"
                    class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full ps-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="1"
                  />
                </div>
              </div>

              <div class="relative">
                <label
                  for="your-destination"
                  class="mb-2 text-sm flex font-base leading-6 text-gray-900 dark:text-gray-50"
                  >Traveller(s) age(s)
                </label>

                <div class="relative">
                  <input
                    id="datepicker-range-start"
                    name="start"
                    type="number"
                    class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full ps-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="my-2 w-full md:my-20"></div>
          <!-- form3 ends -->
        </div>
      </div>
    </div>
    <!-- next button starts -->
    <div class="md:-translate-y-16 xl:-translate-y-20">
      <NextButton link="/quote"></NextButton>
    </div>
    <!-- next button ends -->
  </section>
</template>
