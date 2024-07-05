<template>
  <nav aria-label="Progress" class="flex justify-around w-full mt-10 xl:mt-0 p-10">
    <ol role="list" class="flex items-center justify-between w-full">
      <li class="relative pr-10 sm:pr-36 md:pr-20 w-full">
        <!-- Completed Step -->
        <div class="absolute inset-0 flex items-center w-full">
          <div class="h-3 w-full bg-red"></div>
        </div>
        <a
          href="#"
          class="relative translate-x-2 md:translate-x-10 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 hover:bg-red-900"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 25 27"
            fill="none"
            class="mx-auto my-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5357 7.14307H4.46428C2.49183 7.14307 0.892853 8.74205 0.892853 10.7145V20.5359C0.892853 22.5084 2.49183 24.1074 4.46428 24.1074H20.5357C22.5082 24.1074 24.1071 22.5084 24.1071 20.5359V10.7145C24.1071 8.74205 22.5082 7.14307 20.5357 7.14307Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.14285 24.1074V7.14307"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.8571 24.1074V7.14307"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.03571 7.143C8.03571 5.959 8.50605 4.82348 9.34326 3.98626C10.1805 3.14905 11.316 2.67871 12.5 2.67871C13.684 2.67871 14.8195 3.14905 15.6567 3.98626C16.4939 4.82348 16.9643 5.959 16.9643 7.143"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span class="sr-only">Step 1</span>
        </a>
      </li>
      <li class="relative sm:pr-36 md:pr-20 pr-10 w-full">
        <!-- Completed Step -->
        <div class="absolute inset-0 flex items-center">
          <div class="h-3 w-full bg-gray-200 dark:bg-gray-600"></div>
        </div>
        <a
          href="#"
          class="relative -translate-x-4 lg:translate-x-5 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 hover:bg-red-900"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.23214 4.91066H5.10714C5.30582 4.90964 5.49895 4.97626 5.65473 5.0996C5.81052 5.22292 5.91968 5.3956 5.96428 5.58923L6.875 9.16066L15.8036 7.37494C16.7536 7.18862 17.7331 7.21394 18.6721 7.4491C19.6114 7.68426 20.4871 8.1235 21.2373 8.73555C21.9875 9.34758 22.5936 10.1174 23.0123 10.9903C23.4312 11.8631 23.6525 12.8175 23.6607 13.7857C23.6607 14.2592 23.4725 14.7135 23.1377 15.0483C22.8029 15.3832 22.3486 15.5714 21.875 15.5714H14.0179L12.2321 18.3928C11.9095 18.8958 11.4657 19.3097 10.9416 19.5967C10.4175 19.8837 9.82971 20.0346 9.23214 20.0356H7.26786C7.11518 20.0344 6.96536 19.994 6.83271 19.9185C6.70007 19.8428 6.58903 19.7346 6.51021 19.6037C6.43141 19.473 6.38743 19.3242 6.38252 19.1715C6.37761 19.019 6.41191 18.8676 6.48214 18.7321L8.05357 15.6249H3.125C2.65139 15.6249 2.1972 15.4368 1.8623 15.1019C1.52742 14.767 1.33928 14.3128 1.33928 13.8392V5.80351C1.33928 5.56671 1.43335 5.3396 1.6008 5.17216C1.76824 5.00471 1.99534 4.91066 2.23214 4.91066Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span class="sr-only">Step 2</span>
        </a>
      </li>
      <li class="relative sm:pr-36 md:pr-20 pr-10 w-full">
        <!-- Current Step -->
        <div class="absolute inset-0 flex items-center w-full">
          <div class="h-3 w-full bg-gray-200 dark:bg-gray-600"></div>
        </div>
        <a
          href="#"
          class="relative -translate-x-8 md:-translate-x-10 lg:-translate-x-5 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 hover:bg-red-900"
          aria-current="step"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_46_2092)">
              <path
                d="M6.25 15.1783C6.25018 16.676 6.62697 18.1496 7.34582 19.4634C8.06472 20.7773 9.10258 21.8893 10.3638 22.697C11.6251 23.5045 13.0693 23.982 14.5634 24.085C16.0575 24.1882 17.5536 23.9139 18.9139 23.2873C20.2743 22.6607 21.4551 21.7021 22.3478 20.4995C23.2405 19.297 23.8163 17.8891 24.0223 16.4057C24.2283 14.9223 24.0578 13.4108 23.5265 12.0105C22.9953 10.6102 22.1203 9.36608 20.9821 8.39258"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5714 11.875C15.7601 12.2646 15.8578 12.6921 15.8571 13.125C15.8595 13.4845 15.7904 13.8408 15.6539 14.1734C15.5175 14.5059 15.3163 14.808 15.0622 15.0622C14.808 15.3164 14.5058 15.5176 14.1733 15.654C13.8407 15.7905 13.4844 15.8595 13.1249 15.8571C12.7603 15.8571 12.4105 16.002 12.1527 16.2599C11.8948 16.5177 11.7499 16.8675 11.7499 17.2321V23.4285"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.9822 16.5537H20.6787C20.3116 16.5441 19.9463 16.6082 19.6043 16.7421C19.2624 16.8761 18.9507 17.0771 18.6878 17.3334C18.4248 17.5897 18.2158 17.8961 18.0732 18.2345C17.9305 18.5729 17.8571 18.9364 17.8572 19.3038V23.6788"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.3216 3.51748L3.10731 2.91033C3.23267 2.86769 3.36874 2.8673 3.49446 2.90923C3.62035 2.95114 3.72892 3.03307 3.80374 3.14248L5.10731 5.16033L12.2501 1.5889C12.8146 1.2562 13.4457 1.05238 14.0982 0.99204C14.7507 0.931695 15.4085 1.01631 16.0244 1.23984C16.6404 1.46336 17.1993 1.82026 17.6613 2.28501C18.1232 2.74976 18.4767 3.31087 18.6965 3.92819C18.7571 4.08833 18.7831 4.25948 18.7729 4.43039C18.7627 4.6013 18.7164 4.76812 18.6371 4.91989C18.5579 5.07166 18.4474 5.20494 18.313 5.31101C18.1786 5.41708 18.0233 5.49353 17.8572 5.53533L13.1965 7.03533L12.7322 7.19605L11.8572 10.196C11.8291 10.3005 11.7751 10.3962 11.7002 10.4742C11.6253 10.5523 11.5319 10.6101 11.4287 10.6425L9.32153 11.321C9.21396 11.3561 9.09917 11.3629 8.98821 11.3409C8.87722 11.3189 8.77378 11.2687 8.68774 11.1952C8.60172 11.1217 8.53601 11.0274 8.49688 10.9212C8.45778 10.8151 8.44658 10.7006 8.46438 10.5889L8.92867 8.35676H8.6251L4.0716 9.83891C3.77303 9.94176 3.44606 9.92255 3.16178 9.78541C2.87749 9.64826 2.65892 9.40433 2.55374 9.10676L0.946599 4.16033C0.92892 4.02674 0.956062 3.89108 1.02392 3.77471C1.09196 3.65832 1.1966 3.56782 1.3216 3.51748Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_46_2092">
                <rect width="25" height="25" fill="white" transform="matrix(-1 0 0 1 25 0)" />
              </clipPath>
            </defs>
          </svg>

          <span class="sr-only">Step 3</span>
        </a>
      </li>
      <li class="relative">
        <!-- Upcoming Step -->

        <a
          href="#"
          class="group relative -translate-x-14 md:-translate-x-20 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 hover:bg-red-900"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_46_2098)">
              <path
                d="M24.1072 24.0714H23.2143C22.2672 24.0714 21.3588 23.6952 20.689 23.0254C20.0191 22.3555 19.6429 21.4471 19.6429 20.5C19.6429 21.4471 19.2666 22.3555 18.5968 23.0254C17.927 23.6952 17.0187 24.0714 16.0715 24.0714C15.1243 24.0714 14.2158 23.6952 13.5461 23.0254C12.8763 22.3555 12.5 21.4471 12.5 20.5C12.5 21.4471 12.1238 22.3555 11.454 23.0254C10.7842 23.6952 9.87579 24.0714 8.9286 24.0714C7.9814 24.0714 7.07299 23.6952 6.40322 23.0254C5.73344 22.3555 5.35717 21.4471 5.35717 20.5C5.35717 21.4471 4.9809 22.3555 4.31112 23.0254C3.64135 23.6952 2.73294 24.0714 1.78574 24.0714H0.892883"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.8572 16.9285C16.9375 15.8103 15.7816 14.9098 14.4725 14.2915C13.1634 13.6732 11.7336 13.3525 10.2858 13.3525C8.838 13.3525 7.40819 13.6732 6.09909 14.2915C4.78996 14.9098 3.63405 15.8103 2.71436 16.9285"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.6072 13.4464C11.7143 9.41065 12.9465 5.73207 15.625 4.41064"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.2858 1.01797C11.4433 0.790034 12.6442 1.01486 13.6409 1.64611C14.6376 2.27736 15.3542 3.26692 15.6429 4.41083"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.1607 5.07162C21.3387 4.18415 20.2212 3.62731 19.0179 3.50565C17.8143 3.38399 16.6079 3.7059 15.625 4.4109"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.07141 6.32166C9.77114 5.29077 10.8083 4.53602 12.0044 4.18729C13.2006 3.83854 14.4809 3.91762 15.625 4.41095C16.7726 4.69161 17.7662 5.40732 18.3959 6.40693C19.0258 7.40654 19.2424 8.61177 19.0001 9.76809"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_46_2098">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span class="sr-only">Step 4</span>
        </a>
      </li>
    </ol>
  </nav>
</template>
