<script setup>
import { ref } from 'vue';

const hamburger = ref(true)
</script>

<template>
  <div class="backdrop_filter absolute top-0 left-0 translate-x-40 transition-all" :class="{ 'hidden': hamburger }" >
    <div class="mobile_sidebar absolute top-0">
      <div @click='hamburger = !hamburger' @toggleSidebar='hamburger = !hamburger'>Close</div>

      <div>
        <div>Login</div>

        <div>Sign Up</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backdrop_filter {
  width: 100vw;
  height: 100vh;
  background: rgba(196, 196, 196, 0.46);
  backdrop-filter: blur(7px);
}

.mobile_sidebar {
  width: 150px;
  height: 100vh;
  left: 264px;
  background: #fff;
}
</style>
