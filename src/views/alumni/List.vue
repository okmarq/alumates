<script setup>
import VButton from "@/components/VButton.vue"
import VInput from "@/components/VInput.vue"
import ApiService from "@/services/ApiService"
import { computed } from "@vue/reactivity"
import { reactive, ref, watchEffect } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"

defineProps({
  page: {
    type: Number
  }
})
const store = useStore()
const route = useRouter()
const alumni = reactive({
  alumni: null,
  totalUsers: 0
})
const page = ref(0)
watchEffect(() => {
  // ApiService.getAlumni(5, page)
  //   .then(function (response) {
  //     console.log('Response', response)
  //     alumni.totalUsers = response.headers['x-total-count']
  //   })
  //   .catch(function (error) {
  //     console.error('Error', error)
  //   })
})
// computed({
// hasNextPage() {
//   let totalPages = Math.ceil(alumni.totalUsers / 2)
//   return page < totalPages
// }
// })
function onSubmit() {
  if (store.getters.user.length == 0) {
    route.push({ path: '/user/login' })
  } else {
    ApiService.getGroups(store.getters.alumni.school_id)
      .then(function (response) {
        if (response.status === 200) {
          ApiService.joinAlumni({ group_id: response.data[0].id, user_id: store.getters.user.id })
            .then(function (response) {
              if (response.status === 200) {
                route.push({ path: '/popup/registered' })
              }
            })
            .catch(function (error) {
              console.error('Error', error)
            })
        }
      })
      .catch(function (error) {
        console.error('Error', error)
      })
  }
}
</script>

<template>
  <div class="my-16 text-center">
    <!-- <h2 class="text-2xl font-semibold mb-6 text-[#151522]">{{ store.getters.school }}</h2> -->
    <h2 class="text-2xl font-semibold mb-6 text-[#151522]">{{ store.getters.alumni.school }}</h2>
    <form @submit.prevent="onSubmit">
      <VButton type="submit" content="Join alumni network" class="bg-[#22151F] rounded-full py-2 px-3 text-white" />
    </form>

  </div>

  <div class="mb-7">
    <p class="font-semibold text-sm mb-6 text-[#333333]">All Alumni</p>

    <form class="flex gap-3">
      <VInput type="search" placeholder="Search by name or User ID" class="border-0 rounded-full bg-[#E5E5E5]" />

      <VButton content="Add filters" type="submit"
        class="w-40 px-2 block border-2 border-[#151522] rounded-full text-[#151522]" />
    </form>
  </div>

  <div class="">
    <div class="rounded-3xl shadow-md mb-6 border">
      <div class="flex justify-between items-center px-8 py-6 border-b border-[#EAEAEA] font-semibold">
        <div class="">Name</div>
        <div class="pr-1">Set</div>
      </div>

      <div v-if="store.getters.users">
        <div class="py-6 space-y-6 text-sm text-[#333333]">
          <div v-for="user in store.getters.users" class="flex items-center justify-between px-8">
            <div class="flex items-center gap-4">
              <img src="../../assets/images/simg.png" alt="user image">
              <span>{{ user.name }}</span>
            </div>
            <div>{{ user.set }}</div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="py-6 space-y-6 text-sm text-[#333333]">
          <div class="flex items-center justify-between px-8">
            <div class="flex items-center gap-4">
              <img src="../../assets/images/simg.png" alt="user image">
              <span>no users found</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <!-- <div class="py-6 space-y-6 text-sm text-[#333333]">
        <div v-if="alumni.alumni">
          <div v-for="alumnus in alumni" :key="alumnus.id" :list="alumnus"></div>
        </div> -->
      <!-- <div class="flex items-center justify-between px-8">
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
      </div> -->
    </div>

    <div class="pagination"></div>
    <!-- <div class="flex justify-between items-center gap-6 px-10 text-[#999999]">
      <router-link id="page-prev" class="text-black" :to="{ name: 'ListAlumni', query: { page: page - 1 } }" rel="prev"
        v-if="page != 1">&#60; Previous
      </router-link>
      <span>Page:</span>
      <span class="text-black">1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>...</span>
      <span>15</span>
      <router-link id="page-next" :to="{ name: 'ListAlumni', query: { page: page + 1 } }" rel="next" v-if="hasNextPage">
        &#62; Next
      </router-link>
    </div> -->
  </div>

  <router-view />
</template>
