<script setup>
// @ is an alias to /src
import MobileSideBar from "@/components/MobileSideBar.vue"
import MobileHeader from "@/components/MobileHeader.vue"
import MainContent from "@/components/MainContent.vue"
import MobileFooter from "@/components/MobileFooter.vue"
</script>

<template>
  <header class="px-4">
    <MobileHeader />
  </header>

  <aside>
    <MobileSideBar />
  </aside>

  <main class="mt-10 px-4">
    <MainContent />
  </main>

  <footer class="mt-24">
    <MobileFooter />
  </footer>
</template>
