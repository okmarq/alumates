<script setup>
import VButton from "@/components/subcomponents/VButton.vue"
import VInput from "@/components/subcomponents/VInput.vue"
import ApiService from "@/services/ApiService"
import { computed } from "@vue/reactivity";
import { reactive, watchEffect } from "vue";
import { useStore } from "vuex";

defineProps({
  page: {
    type: Number
  }
})
const store = useStore()
const alumni = reactive({
  alumni: null,
  totalUsers: 0
})
const page = reactive(1)
watchEffect(() => {
  alumni.alumni = null
  ApiService.getAlumni(5, page)
    .then(function (response) {
      console.log('Response', response)
      alumni.totalUsers = response.headers['x-total-count']
    })
    .catch(function (error) {
      console.error('Error', error)
    })
})
computed({
  hasNextPage() {
    let totalPages = Math.ceil(alumni.totalUsers / 2)
    return page < totalPages
  }
})
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
        <div v-if="alumni.alumni">
          <div v-for="alumnus in alumni" :key="alumnus.id" :list="alumnus"></div>
        </div>
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

<div class="pagination"></div>
    <div class="flex justify-between items-center gap-6 px-10 text-gray-400">
      <router-link id="page-prev" class="text-gray-900" :to="{ name: 'ListAlumni', query: { page: page - 1 } }" rel="prev"
        v-if="page != 1">&#60; Previous
      </router-link>
      <span>Page:</span>
      <span class="text-gray-900">1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>...</span>
      <span>15</span>
      <router-link id="page-next" :to="{ name: 'ListAlumni', query: { page: page + 1 } }" rel="next" v-if="hasNextPage">&#62; Next
      </router-link>
    </div>
  </div>

  <router-view />
</template>
