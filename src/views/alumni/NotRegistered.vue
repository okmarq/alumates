<script setup>
import VButton from "@/components/subcomponents/VButton.vue"
import { useStore } from 'vuex'

const store = useStore()
</script>

<template>
  <div class="absolute -top-5 w-full h-full">
    <div class="backdrop-blur grid place-items-center h-screen">
      <div class="w-80 h-64 rounded-xl bg-white shadow-md flex flex-col justify-between gap-10 py-7 mx-auto relative">
        <img src="../../assets/images/close.svg" alt="arrow"
          class="hover:scale-110 transition-all cursor-pointer absolute top-0 right-0 py-2 px-4" />

        <div class="px-10">
          <h2 class="font-semibold text-xl mb-5">Oops ...</h2>

          <p class="font-semibold text-sm">It looks like your Alumni isn't registered yet. Will you do us the honor?
          </p>
        </div>

        <div>
          <VButton content="Register my alumni" class="bg-neutral-900 text-white py-3 px-4 rounded-full" />
        </div>
      </div>
    </div>
  </div>
</template>
