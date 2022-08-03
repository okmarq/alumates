<script setup>
import { useStore } from 'vuex'

const store = useStore()
</script>

<template>
  <div class="text-center backdrop-blur absolute z-50 -top-5 right-0"
    :class="{ 'translate-x-0 transition-all w-full h-full': store.getters.sidebar, 'hidden': !store.getters.sidebar }">

    <div class="bg-white absolute top-0 right-0 flex flex-col gap-12 pt-28"
      :class="{ 'translate-x-0 transition-all w-40 h-full': store.getters.sidebar }">
      <div @click="store.commit('toggleSidebar')">Close</div>

      <div>
        <div>Login</div>

        <div>Sign Up</div>
      </div>
    </div>

    <!-- <div class="bg-[#151522] text-white absolute top-0 right-0 flex flex-col justify-between pt-14 pb-20"
      :class="{ 'translate-x-0 transition-all w-60 h-screen': store.getters.sidebar }">
      <div class="flex flex-col gap-12 justify-between">
        <div class="flex flex-col gap-4 justify-between items-center">
          <div class="bg-white w-24 h-24 rounded-full">
            <img src="../../assets/images/user.png" alt="profile picture"
              class="object-contain object-center w-24 h-24">
          </div>

          <span>@ALU003474</span>
        </div>

        <div class="flex flex-col items-start">
          <route-link
            :class="{ 'bg-gradient-to-l from-gray-200': true, 'hover:bg-gradient-to-l hover:from-gray-500': false }"
            class="py-2 pl-16 w-full text-left">Search</route-link>
          <route-link
            :class="{ 'bg-gradient-to-l from-gray-200': false, 'hover:bg-gradient-to-l hover:from-gray-500': true }"
            class="py-2 pl-16 w-full text-left">Profile Settings</route-link>
          <route-link
            :class="{ 'bg-gradient-to-l from-gray-200': false, 'hover:bg-gradient-to-l hover:from-gray-500': true }"
            class="py-2 pl-16 w-full text-left">Alumni Network</route-link>
          <route-link
            :class="{ 'bg-gradient-to-l from-gray-200': false, 'hover:bg-gradient-to-l hover:from-gray-500': true }"
            class="py-2 pl-16 w-full text-left">Notifiations</route-link>
        </div>
      </div>

      <div class="flex flex-col items-start">
        <route-link
          :class="{ 'bg-gradient-to-l from-gray-200': false, 'hover:bg-gradient-to-l hover:from-gray-500': true }"
          class="py-2 pl-16 w-full text-left flex items-center gap-1">
          <img src="../../assets/images/help.svg" alt="help icon">
          <span>Help</span>
        </route-link>
        <route-link
          :class="{ 'bg-gradient-to-l from-gray-200': false, 'hover:bg-gradient-to-l hover:from-gray-500': true }"
          class="py-2 pl-16 w-full text-left flex items-center gap-1">
          <img src="../../assets/images/logout.svg" alt="logout icon">
          <span>Logout</span></route-link>
      </div>
    </div> -->
  </div>
</template>
