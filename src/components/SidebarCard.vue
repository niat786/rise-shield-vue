<template>
  <div class="md:min-h-[30rem] xl:min-h-[34rem] rounded-xl lg:mt-64 xl:mt-52 p-4">
    <div
      class="hidden md:block min-h-[70%] max-h-[80%] rounded-3xl border-red border-4 md:border-[4px] w-11/12 h-full dark:bg-gray-700"
    >
      <div class="flex flex-col items-start space-y-6 px-8 md:px-3 xl:px-8 py-12">
        <router-link
          to="/"
          class="rounded-xl bg-red py-2 md:py-2.5 text-white text-start px-3 lg:min-w-40 xl:min-w-48 flex items-center"
        >
          <span v-if="tripSelected"
            ><svg
              width="21"
              height="17"
              viewBox="0 0 25 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1"
            >
              <path
                d="M0.892944 13.2681L5.76794 19.5358C5.93244 19.7496 6.14323 19.9233 6.38446 20.044C6.62569 20.1646 6.89112 20.229 7.1608 20.2323C7.42614 20.2355 7.68884 20.1792 7.92978 20.0682C8.17071 19.9569 8.38384 19.7933 8.55366 19.5894L24.1072 0.768066"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          Choose your trip
        </router-link>
        <router-link
          to="/trip-details"
          v-bind:class="
            currentPage !== 'destination' || !destinationSelected
              ? 'bg-gray text-gray-300'
              : 'bg-red text-gray-50'
          "
          class="rounded-xl bg-gray py-2 md:py-2.5 text-gray-300 text-start px-3 lg:min-w-40 flex items-center"
        >
          <span v-if="destinationSelected"
            ><svg
              width="21"
              height="17"
              viewBox="0 0 25 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1"
            >
              <path
                d="M0.892944 13.2681L5.76794 19.5358C5.93244 19.7496 6.14323 19.9233 6.38446 20.044C6.62569 20.1646 6.89112 20.229 7.1608 20.2323C7.42614 20.2355 7.68884 20.1792 7.92978 20.0682C8.17071 19.9569 8.38384 19.7933 8.55366 19.5894L24.1072 0.768066"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          Destination
        </router-link>
        <router-link
          to="/quote"
          class="rounded-xl bg-gray py-2 md:py-2.5 text-gray-300 text-start px-3 lg:min-w-40 flex items-center"
        >
          <span v-if="quoteSelected"
            ><svg
              width="21"
              height="17"
              viewBox="0 0 25 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1"
            >
              <path
                d="M0.892944 13.2681L5.76794 19.5358C5.93244 19.7496 6.14323 19.9233 6.38446 20.044C6.62569 20.1646 6.89112 20.229 7.1608 20.2323C7.42614 20.2355 7.68884 20.1792 7.92978 20.0682C8.17071 19.9569 8.38384 19.7933 8.55366 19.5894L24.1072 0.768066"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          Quote
        </router-link>
        <router-link
          to="/checkout"
          v-bind:class="
            currentPage !== 'checkout' ? 'bg-gray text-gray-300' : 'bg-red text-gray-50'
          "
          class="rounded-xl py-2 md:py-2.5 text-center px-3 lg:min-w-40"
        >
          Checkout
        </router-link>
      </div>

      <!-- Conditional additional info -->
      <div v-if="showPriceSummary" class="border-t-2">
        <h3 class="text-center my-5 text-lg font font-semibold text-[#EE2C4F]">
          Your policy summary
        </h3>
        <div class="text-sm flex justify-between px-4">
          <span>Tier 1</span>
          <span>$60</span>
        </div>

        <div class="text-sm flex justify-between px-4">
          <span>Excess waiver</span>
          <span>$10</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showPriceSummary: {
      type: Boolean,
      default: 0
    },
    currentPage: {
      type: String,
      default: 'destination'
    },
    tripSelected: {
      type: Boolean,
      default: 1
    },
    destinationSelected: {
      type: Boolean,
      default: 1
    },
    quoteSelected: {
      type: Boolean,
      default: 1
    }
  }
}
</script>
