<script>
import { RouterLink } from 'vue-router'
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  },
  components: {
    RouterLink
  }
}
</script>
<template>
  <div class="flex w-full justify-end">
    <router-link :to="link" class="px-12 py-2 bg-red rounded-full text-white lg:mr-5">
      Next
    </router-link>
  </div>
</template>
