<script setup>
// @ is an alias to /src
import VAside from "@/components/layout/VAside.vue"
import VFooter from "@/components/layout/VFooter.vue"
import VHeader from "@/components/layout/VHeader.vue"
</script>

<template>
  <header class="px-4">
    <VHeader />
  </header>

  <aside>
    <VAside />
  </aside>

  <main class="mt-10 px-4">
    <router-view />
  </main>

  <footer class="mt-24">
    <VFooter />
  </footer>
</template>
