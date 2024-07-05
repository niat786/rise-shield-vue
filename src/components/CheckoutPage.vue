<script setup>
import ProgressBarComponent from './ProgressBarComponent.vue'
import SidebarCard from './SidebarCard.vue'
import NextButton from './NextButton.vue'
</script>

<template>
  <section class="p-2 sm:p-5 lg:px-0 xl:p-20 md:mt-32 lg:mt-6 max-w-[110rem] mx-auto">
    <div class="sidebar grid grid-cols-1 lg:grid-cols-4 gap-y-1 gap-1 0grid-rows-1">
      <!-- sidebar card starts -->

      <SidebarCard></SidebarCard>
      <!-- sidebar card ends -->

      <div class="col-span-3 flex flex-col text-center lg:text-left">
        <div class="flex justify-stretch">
          <ProgressBarComponent></ProgressBarComponent>
        </div>

        <h2 class="text-xl md:text-2xl mt-10 md:px-5">Let’s get your details</h2>
        <div class="pb-2 mt-10">
          <h3 class="text-lg md:px-5 flex">
            Traveller 1’s details
            <span class="flex justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#EE2C4F"
                class="size-5 -translate-y-2 peer"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span
                class="peer-hover:block hidden rounded-xl p-4 max-w-80 min-h-20 shadow-lg border-red bg-white dark:bg-gray-700 dark:text-gray-50 z-50 absolute translate-x-3 translate-y-3 text-sm border-[3px]"
              >
                The following sections duplicate according to the number of travellers.
              </span>
            </span>
          </h3>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 text-sm">
          <!-- column 1 -->
          <div class="py-3 lg:px-5">
            <div class="input flex flex-col items-start">
              <label for="name">Your name as it appears on your passport.</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                class="w-full py-2.5 px-3 mt-3 border border-gray-400 dark:border-gray-500 focus:outline-0 rounded-lg bg-white dark:bg-gray-600 dark:text-white"
              />
            </div>

            <div class="input flex flex-col items-start mt-8">
              <label for="dob">Your date of birth.</label>
              <input
                id="dob"
                type="text"
                placeholder="Date of birth"
                class="w-full py-2.5 px-3 mt-3 border border-gray-400 dark:border-gray-500 focus:outline-0 rounded-lg bg-white dark:bg-gray-600 dark:text-white"
              />
            </div>

            <div class="input flex flex-col items-start mt-8">
              <label for="email">Your email address so we can email your policy to you.</label>
              <input
                id="email"
                type="text"
                placeholder="Email Address"
                class="w-full py-2.5 px-3 mt-3 border border-gray-400 dark:border-gray-500 focus:outline-0 rounded-lg bg-white dark:bg-gray-600 dark:text-white"
              />
            </div>

            <div class="input flex flex-col items-start mt-8">
              <label for="address">Your home address.</label>
              <input
                id="address"
                type="text"
                placeholder="Home Address"
                class="w-full py-2.5 px-3 mt-3 border border-gray-400 dark:border-gray-500 focus:outline-0 rounded-lg bg-white dark:bg-gray-600 dark:text-white"
              />

              <input
                id="address2"
                type="text"
                placeholder="Home Address"
                class="w-full py-2.5 px-3 mt-3 border border-gray-400 dark:border-gray-500 focus:outline-0 rounded-lg bg-white dark:bg-gray-600 dark:text-white"
              />

              <input
                id="town-city"
                type="text"
                placeholder="Town/City"
                class="w-full py-2.5 px-3 mt-3 border border-gray-400 dark:border-gray-500 focus:outline-0 rounded-lg bg-white dark:bg-gray-600 dark:text-white"
              />
              <input
                id="country"
                type="text"
                placeholder="Country"
                class="w-full py-2.5 px-3 mt-3 border border-gray-400 dark:border-gray-500 focus:outline-0 rounded-lg bg-white dark:bg-gray-600 dark:text-white"
              />

              <input
                id="postal-code"
                type="text"
                placeholder="Postal Code"
                class="w-full md:w-1/2 lg:w-1/3 py-2.5 px-3 mt-3 border border-gray-400 dark:border-gray-500 focus:outline-0 rounded-lg bg-white dark:bg-gray-600 dark:text-white"
              />
            </div>
          </div>
          <!-- column 1 ends -->

          <!-- column 2 -->
          <div class="py-3 lg:px-5">
            <div class="input flex flex-col items-start">
              <label for="surname">Your surname as it appears on your passport.</label>
              <input
                id="surname"
                type="text"
                placeholder="Surname"
                class="w-full text-sm py-2.5 px-3 mt-3 border border-gray-400 dark:border-gray-500 focus:outline-0 rounded-lg bg-white dark:bg-gray-600 dark:text-white"
              />
            </div>

            <div class="input flex flex-col items-start mt-8">
              <label for="passport">Your passport number.</label>
              <input
                id="passport"
                type="text"
                placeholder="Passport Number"
                class="w-full py-2.5 px-3 mt-3 border border-gray-400 dark:border-gray-500 focus:outline-0 rounded-lg bg-white dark:bg-gray-600 dark:text-white"
              />
            </div>

            <div class="input flex flex-col items-start mt-8">
              <label for="phone-number">Your mobile number. (Optional)</label>
              <input
                id="phone-number"
                type="text"
                placeholder="Phone Number"
                class="w-full py-2.5 px-3 mt-3 border border-gray-400 dark:border-gray-500 focus:outline-0 rounded-lg bg-white dark:bg-gray-600 dark:text-white"
              />
            </div>
          </div>
          <!-- column 2 ends -->
        </div>

        <!-- card payment section -->
        <div class="w-full lg:p-5 space-y-3 flex flex-col items-start">
          <h2 class="text-xl md:text-2xl">Payment info</h2>
          <div class="w-full lg:w-10/12">
            <div class="border-2 border-red-500 rounded-xl px-8 py-4">
              <div class="input flex flex-col items-start">
                <input
                  id="card-holder-name"
                  type="text"
                  placeholder="card holder's name"
                  class="w-full text-sm py-2.5 px-3 mt-3 border border-gray-400 dark:border-gray-500 focus:outline-0 rounded-lg bg-white dark:bg-gray-600 dark:text-white"
                />
                <div class="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div class="number">
                    <input
                      id="card-holder-name"
                      type="text"
                      placeholder="card holder's name"
                      class="w-full text-sm py-2.5 px-3 mt-3 border border-gray-400 dark:border-gray-500 focus:outline-0 rounded-lg bg-white dark:bg-gray-600 dark:text-white"
                    />
                  </div>

                  <div class="exp-cvv grid grid-cols-2 gap-4">
                    <input
                      id="exp-date"
                      type="text"
                      placeholder="Expiry Number"
                      class="w-full text-sm py-2.5 px-3 mt-3 border border-gray-400 dark:border-gray-500 focus:outline-0 rounded-lg bg-white dark:bg-gray-600 dark:text-white"
                    />
                    <input
                      id="cvv"
                      type="text"
                      placeholder="CVV"
                      class="w-full text-sm py-2.5 px-3 mt-3 border border-gray-400 dark:border-gray-500 focus:outline-0 rounded-lg bg-white dark:bg-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <div
                  class="card-footer mt-4 flex flex-col md:flex-row space-y-4 items-start lg:justify-between"
                >
                  <div
                    class="flex flex-col space-y-4 items-start justify-start text-sm w-full md:w-2/3 lg:w-3/4"
                  >
                    <label for="terms" class="text-sm space-x-2">
                      <input type="checkbox" class="rounded-none w-4 h-4 md:mr-2 translate-y-1" /> I
                      would like to recieve the latest news, deals & opportunities by email.
                    </label>
                    <label for="terms" class="text-sm">
                      <input type="checkbox" class="rounded-none w-4 h-4 md:mr-2 translate-y-1" /> I
                      have read and accept the <a href="/privacy">privacy policy</a> and
                      <a href="/terms">general conditions</a>.
                    </label>
                  </div>

                  <div class="images flex justify-center w-full md:w-1/4">
                    <img src="/cards.png" alt="cards" class="max-h-28 lg:max-h-32" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- conform button starts -->
        <div class="mx-auto">
          <button class="px-12 py-2 my-10 lg:my-2 bg-red rounded-full text-white lg:mr-5">
            Conform Purchase
          </button>
        </div>
        <!-- conform button ends -->
      </div>
    </div>
  </section>
</template>
