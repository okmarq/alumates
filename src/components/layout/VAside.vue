<script setup>
import { useStore } from 'vuex';

const store = useStore()
</script>

<template>
  <div class="backdrop_filter absolute top-0 right-0 z-50" :class="{ 'translate-x-0 transition-all w-screen h-screen': store.getters.sidebar, 'hidden': !store.getters.sidebar }">
    <div class="bg-white absolute top-0 right-0 flex flex-col gap-12 pt-20" :class="{ 'translate-x-0 transition-all w-40 h-screen': store.getters.sidebar }">
      <div @click="store.commit('toggleSidebar')">Close</div>

      <div>
        <div>Login</div>

        <div>Sign Up</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backdrop_filter {
  background: rgba(196, 196, 196, 0.46);
  backdrop-filter: blur(7px);
}
</style>
