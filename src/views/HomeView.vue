<script setup>
import MobileSideBar from "@/components/MobileSideBar.vue";
import MobileHeader from "@/components/MobileHeader.vue";
import MainContent from "@/components/MainContent.vue";
import VFooter from "@/components/VFooter.vue";
</script>

<template>
  <header class="px-4">
    <MobileHeader />
  </header>

  <aside>
    <!-- <MobileSideBar /> -->
  </aside>

  <main class="mt-10 px-4">
    <MainContent />
  </main>

  <footer class="mt-24">
    <VFooter />
  </footer>
</template>

<style scoped></style>
