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

        <div class="w-full xl:w-11/12">
          <!-- form  -->
          <div class="py-3 lg:px-5">
            <h2 class="text-xl md:text-2xl md:pr-5">Choose your extras</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
              <!-- card 1 -->

              <div
                class="border-[#8c8c8c] dark:border-gray-600 border-4 md:border-[4px] rounded-3xl w-full"
              >
                <div class="px-2 md:px-3 lg:px-5 lg:py-4 flex flex-col space-y-4 items-center">
                  <div class="help-icon-and-heading flex">
                    <h3 class="text-xl font-semibold text-center mt-2">Excess Waiver</h3>
                    <span class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#EE2C4F"
                        class="size-5 translate-y-3 translate-x-20 md:translate-x-28 lg:translate-x-4 lg:-translate-y-2 xl:-translate-y-1 xl:translate-x-10 peer"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        class="peer-hover:block hidden rounded-xl p-4 text-[11px] max-w-96 shadow-lg border-red bg-white dark:bg-gray-700 dark:text-gray-50 z-50 absolute border-[3px] xl:translate-x-5 translate-y-5"
                      >
                        When the user hovers over the help icon a tooltip pops up and explains what
                        the optional extra includes/excludes. <br />For specified items an input
                        field appears where the user can identify specific items to insure.
                      </span>
                    </span>
                  </div>
                  <p class="text-xl text-center text-red-500">$10</p>

                  <button class="px-10 py-1.5 rounded-lg bg-red-500 text-white text-md">
                    SELECT
                  </button>
                </div>
                <div class="w-full border-t border-gray-500 mt-4 lg:mt-0">
                  <div class="p-3 text-[10px]">
                    Reduces the amount to pay in the event of a claim. The normal excess with your
                    chosen policy is $120.
                  </div>
                </div>
              </div>

              <!-- card 1 ends -->

              <!-- card-2 -->
              <div
                class="border-[#8c8c8c] dark:border-gray-600 border-4 md:border-[4px] rounded-3xl w-full"
              >
                <div class="px-2 md:px-3 lg:px-5 lg:py-4 flex flex-col space-y-4 items-center">
                  <div class="help-icon-and-heading flex">
                    <h3 class="text-xl font-semibold text-center mt-2">Baggage</h3>
                    <span class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#EE2C4F"
                        class="size-5 translate-y-3 translate-x-[6.7rem] md:translate-x-36 xl:-translate-y-1 lg:translate-x-10 lg:-translate-y-2 xl:translate-x-10 peer"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        class="peer-hover:block hidden rounded-xl p-4 text-[11px] max-w-96 shadow-lg border-red bg-white dark:bg-gray-700 dark:text-gray-50 z-50 absolute border-[3px] xl:translate-x-5 translate-y-5"
                      >
                        When the user hovers over the help icon a tooltip pops up and explains what
                        the optional extra includes/excludes. <br />For specified items an input
                        field appears where the user can identify specific items to insure.
                      </span>
                    </span>
                  </div>
                  <p class="text-xl text-center text-red-500">$25</p>

                  <button class="px-10 py-1.5 rounded-lg bg-red-500 text-white text-md">
                    SELECT
                  </button>
                </div>
                <div class="w-full border-t border-gray-500 mt-4 lg:mt-0">
                  <div class="p-3 text-[10px]">
                    Baggage is not automatically included in your cover. Choose this if you want to
                    cover it.
                  </div>
                </div>
              </div>
              <!-- card-2 ends -->

              <!-- card-3 -->
              <div
                class="border-[#8c8c8c] dark:border-gray-600 border-4 md:border-[4px] rounded-3xl w-full"
              >
                <div class="px-2 md:px-3 lg:px-5 lg:py-4 flex flex-col space-y-4 items-center">
                  <div class="help-icon-and-heading flex">
                    <h3 class="text-xl font-semibold text-center mt-2">Specified Items</h3>
                    <span class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#EE2C4F"
                        class="size-5 translate-y-3 translate-x-[4.7rem] md:translate-x-28 lg:translate-x-3 lg:-translate-y-2 xl:-translate-y-1 xl:translate-x-10 peer"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        class="peer-hover:block hidden rounded-xl p-4 text-[11px] max-w-96 shadow-lg border-red bg-white dark:bg-gray-700 dark:text-gray-50 z-50 absolute border-[3px] xl:-translate-x-5 -translate-y-5"
                      >
                        When the user hovers over the help icon a tooltip pops up and explains what
                        the optional extra includes/excludes. <br />For specified items an input
                        field appears where the user can identify specific items to insure.
                      </span>
                    </span>
                  </div>
                  <p class="text-xl text-center text-red-500">$15</p>

                  <button class="px-10 py-1.5 rounded-lg bg-red-500 text-white text-md">
                    SELECT
                  </button>
                </div>
                <div class="w-full border-t border-gray-500 mt-4 lg:mt-0">
                  <div class="p-3 text-[10px]">
                    Insure extra valuable items such as cameras, skis and more with this option.
                  </div>
                </div>
              </div>
              <!-- card-3 ends -->

              <!-- card-4 -->
              <div
                class="border-[#8c8c8c] dark:border-gray-600 border-4 md:border-[4px] rounded-3xl w-full"
              >
                <div class="px-2 md:px-3 lg:px-5 lg:py-4 flex flex-col space-y-4 items-center">
                  <div class="help-icon-and-heading flex">
                    <h3 class="text-xl font-semibold text-center mt-2">Cruises</h3>
                    <span class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#EE2C4F"
                        class="size-5 translate-y-3 translate-x-28 md:translate-x-36 lg:translate-x-12 lg:-translate-y-2 xl:-translate-y-1 xl:translate-x-16 peer"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        class="peer-hover:block hidden rounded-xl p-4 text-[11px] max-w-96 shadow-lg border-red bg-white dark:bg-gray-700 dark:text-gray-50 z-50 absolute border-[3px] xl:translate-x-5 translate-y-5"
                      >
                        When the user hovers over the help icon a tooltip pops up and explains what
                        the optional extra includes/excludes. <br />For specified items an input
                        field appears where the user can identify specific items to insure.
                      </span>
                    </span>
                  </div>
                  <p class="text-xl text-center text-red-500">$5</p>

                  <button class="px-10 py-1.5 rounded-lg bg-red-500 text-white text-md">
                    SELECT
                  </button>
                </div>
                <div class="w-full border-t border-gray-500 mt-4 lg:mt-0">
                  <div class="p-3 text-[10px]">Additional cover if you’re going on a cruise.</div>
                </div>
              </div>
              <!-- card-4 ends -->

              <!-- card-5 -->
              <div
                class="border-[#8c8c8c] dark:border-gray-600 border-4 md:border-[4px] rounded-3xl w-full"
              >
                <div class="px-2 md:px-3 lg:px-5 lg:py-4 flex flex-col space-y-4 items-center">
                  <div class="help-icon-and-heading flex">
                    <h3 class="text-xl font-semibold text-center mt-2">Adventure Pack 1</h3>
                    <span class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#EE2C4F"
                        class="size-5 translate-y-3 translate-x-16 md:translate-x-24 lg:translate-x-3 lg:-translate-y-2 xl:-translate-y-1 xl:translate-x-7 peer"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        class="peer-hover:block hidden rounded-xl p-4 text-[11px] max-w-96 shadow-lg border-red bg-white dark:bg-gray-700 dark:text-gray-50 z-50 absolute border-[3px] xl:translate-x-5 translate-y-5"
                      >
                        When the user hovers over the help icon a tooltip pops up and explains what
                        the optional extra includes/excludes. <br />For specified items an input
                        field appears where the user can identify specific items to insure.
                      </span>
                    </span>
                  </div>
                  <p class="text-xl text-center text-red-500">$20</p>

                  <button class="px-10 py-1.5 rounded-lg bg-red-500 text-white text-md">
                    SELECT
                  </button>
                </div>
                <div class="w-full border-t border-gray-500 mt-4 lg:mt-0">
                  <div class="p-3 text-[10px]">
                    Add cover for X adventure activities ranging from water sports to trekking below
                    3000m.
                  </div>
                </div>
              </div>
              <!-- card-5 ends -->

              <!-- card-6 -->
              <div
                class="border-[#8c8c8c] dark:border-gray-600 border-4 md:border-[4px] rounded-3xl w-full"
              >
                <div class="px-2 md:px-3 lg:px-5 lg:py-4 flex flex-col space-y-4 items-center">
                  <div class="help-icon-and-heading flex">
                    <h3 class="text-xl font-semibold text-center mt-2">Adventure Pack 2</h3>
                    <span class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#EE2C4F"
                        class="size-5 translate-y-3 translate-x-16 md:translate-x-24 lg:translate-x-3 lg:-translate-y-2 xl:-translate-y-1 xl:translate-x-7 peer"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        class="peer-hover:block hidden rounded-xl p-4 text-[11px] max-w-96 shadow-lg border-red bg-white dark:bg-gray-700 dark:text-gray-50 z-50 absolute border-[3px] xl:-translate-x-5 -translate-y-5"
                      >
                        When the user hovers over the help icon a tooltip pops up and explains what
                        the optional extra includes/excludes. <br />For specified items an input
                        field appears where the user can identify specific items to insure.
                      </span>
                    </span>
                  </div>
                  <p class="text-xl text-center text-red-500">$35</p>

                  <button class="px-10 py-1.5 rounded-lg bg-red-500 text-white text-md">
                    SELECT
                  </button>
                </div>
                <div class="w-full border-t border-gray-500 mt-4 lg:mt-0">
                  <div class="p-3 text-[10px]">
                    Add cover for X adventures activities, including trekking up to any altitude.
                  </div>
                </div>
              </div>
              <!-- card-6 ends -->

              <!-- card-7 -->
              <div
                class="border-[#8c8c8c] dark:border-gray-600 border-4 md:border-[4px] rounded-3xl w-full"
              >
                <div class="px-2 md:px-3 lg:px-5 lg:py-4 flex flex-col space-y-4 items-center">
                  <div class="help-icon-and-heading flex">
                    <h3 class="text-xl font-semibold text-center mt-2">Trekking in Nepal</h3>
                    <span class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#EE2C4F"
                        class="size-5 translate-y-3 translate-x-16 md:translate-x-24 lg:translate-x-3 lg:-translate-y-2 xl:-translate-y-1 xl:translate-x-7 peer"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        class="peer-hover:block hidden rounded-xl p-4 text-[11px] max-w-96 shadow-lg border-red bg-white dark:bg-gray-700 dark:text-gray-50 z-50 absolute border-[3px] xl:translate-x-5 translate-y-5"
                      >
                        When the user hovers over the help icon a tooltip pops up and explains what
                        the optional extra includes/excludes. <br />For specified items an input
                        field appears where the user can identify specific items to insure.
                      </span>
                    </span>
                  </div>
                  <p class="text-xl text-center text-red-500">$35</p>

                  <button class="px-10 py-1.5 rounded-lg bg-red-500 text-white text-md">
                    SELECT
                  </button>
                </div>
                <div class="w-full border-t border-gray-500 mt-4 lg:mt-0">
                  <div class="p-3 text-[10px]">Add cover for trekking in Nepal.</div>
                </div>
              </div>
              <!-- card-7 ends -->

              <!-- card-7 -->
              <div
                class="border-[#8c8c8c] dark:border-gray-600 border-4 md:border-[4px] rounded-3xl w-full"
              >
                <div class="px-2 md:px-3 lg:px-5 lg:py-4 flex flex-col space-y-4 items-center">
                  <div class="help-icon-and-heading flex">
                    <h3 class="text-xl font-semibold text-center mt-2">Winter Sports</h3>
                    <span class="flex relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#EE2C4F"
                        class="size-5 absolute translate-y-3 translate-x-20 md:translate-x-[7rem] lg:translate-x-3 lg:-translate-y-2 xl:-translate-y-1 xl:translate-x-10 peer"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        class="peer-hover:block hidden rounded-xl p-4 text-[11px] min-w-96 shadow-lg border-red bg-white dark:bg-gray-700 dark:text-gray-50 z-50 absolute border-[3px] xl:-translate-x-5 -translate-y-5"
                      >
                        When the user hovers over the help icon a tooltip pops up and explains what
                        the optional extra includes/excludes. <br />For specified items an input
                        field appears where the user can identify specific items to insure.
                      </span>
                    </span>
                  </div>
                  <p class="text-xl text-center text-red-500">$15</p>

                  <button class="px-10 py-1.5 rounded-lg bg-red-500 text-white text-md">
                    SELECT
                  </button>
                </div>
                <div class="w-full border-t border-gray-500 mt-4 lg:mt-0">
                  <div class="p-3 text-[10px]">
                    Protect yourself against accidents while skiing, snowboarding and other winter
                    sports.
                  </div>
                </div>
              </div>
              <!-- card-7 ends -->
            </div>
          </div>
          <!-- form ends -->
        </div>
      </div>
    </div>
    <!-- next button starts -->
    <div class="md:xl:-translate-y-0 xl:xl:-translate-y-10">
      <NextButton link="checkout" showPriceSummary="true"></NextButton>
    </div>
    <!-- next button ends -->
  </section>
</template>
