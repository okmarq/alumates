<script setup>
import { useStore } from 'vuex';

const store = useStore()
</script>

<template>
  <div class="backdrop-blur absolute -top-5 right-0"
    :class="{ 'translate-x-0 transition-all w-full h-full': store.getters.sidebar, 'hidden': !store.getters.sidebar }">
    <div class="bg-white absolute top-0 right-0 flex flex-col gap-12 pt-28"
      :class="{ 'translate-x-0 transition-all w-40 h-full': store.getters.sidebar }">
      <div @click="store.commit('toggleSidebar')">Close</div>

      <div>
        <div>Login</div>

        <div>Sign Up</div>
      </div>
    </div>
  </div>
</template>
