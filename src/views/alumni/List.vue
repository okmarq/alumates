<script setup>
import VButton from "@/components/subcomponents/VButton.vue"
import VInput from "@/components/subcomponents/VInput.vue"
import ApiService from "@/services/ApiService"
import { useStore } from "vuex";

// defineProps({
//   page: {
//     type: Number
//   }
// })
// ApiService.getAlumni(5, page)
//   .then(function (response) {
//     console.log('Response', response)
//   })
//   .catch(function (error) {
//     console.error('Error', error)
//   })
const store = useStore()
</script>

<template>
  <div class="my-16 text-center">
    <!-- <h2 class="text-2xl font-semibold mb-6">{{ store.getters.school }}</h2> -->
    <h2 class="text-2xl font-semibold mb-6">John Quincy Adams University</h2>

    <VButton content="Join alumni network" class="bg-stone-900 rounded-full py-2 px-3 text-white" />
  </div>

  <div class="mb-7">
    <p class="font-semibold text-sm mb-6">All Alumni</p>

    <form class="flex gap-3">
      <VInput type="search" placeholder="Search by name or User ID" class="border-0 rounded-full bg-stone-200" />

      <VButton content="Add filters" type="submit"
        class="w-40 px-2 block border-2 border-stone-900 rounded-full text-stone-900" />
    </form>
  </div>

  <div class="">
    <div class="rounded-3xl shadow-md mb-6 bg-zinc-100 card">
      <div class="flex justify-between items-center px-8 py-6 border-b border-stone-200 font-semibold">
        <div class="">Name</div>
        <div class="pr-1">Set</div>
      </div>

      <div class="py-6 space-y-6 text-sm">
        <!-- <div v-for="alumnus in alumni" :key="alumnus.id" :list="alumnus"></div> -->
        <div class="flex items-center justify-between px-8">
          <div class="flex items-center gap-4">
            <img src="../../assets/images/simg.png" alt="user image">
            <span>Elvis Presley</span>
          </div>
          <div>2014</div>
        </div>

        <div class="flex items-center justify-between px-8">
          <div class="flex items-center gap-4">
            <img src="../../assets/images/simg.png" alt="user image">
            <span>Arthur Prescott</span>
          </div>
          <div>2018</div>
        </div>
      </div>
    </div>

    <div class="flex justify-between items-center gap-6 px-10 text-gray-400">
      <span class="text-gray-900">Page:</span>
      <span class="text-gray-900">1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>...</span>
      <span>15</span>
    </div>
  </div>

  <router-view />
</template>
