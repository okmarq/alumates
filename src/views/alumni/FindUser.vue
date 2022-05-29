<script setup>
import VButton from "@/components/VButton.vue"
import { useStore } from 'vuex'

const store = useStore()
</script>

<template>
  <div class="absolute -top-5 w-full h-full">
    <div class="backdrop-blur grid place-items-center h-screen">
      <div class="w-80 h-64 rounded-xl bg-white shadow-md flex flex-col justify-between gap-10 py-7 mx-auto relative">
        <img src="../../assets/images/close.svg" alt="arrow"
          class="hover:scale-110 transition-all cursor-pointer absolute top-0 right-0 py-2 px-4" />

        <form class="flex flex-col gap-4 px-6">
          <fieldset>
            <legend class="text-left font-semibold">
              <label for="course">Course of study</label>
            </legend>

            <input id="course" type="text" placeholder="What was their major?"
              class="py-2 px-4 rounded-full w-full form-input placeholder-gray-400 text-gray-500 appearance-none block focus:outline-none bg-gray-300">
          </fieldset>

          <fieldset>
            <legend class="text-left font-semibold">
              <label for="year">Year of graduation</label>
            </legend>

            <input id="year" type="text" placeholder="What year did they graduate?"
              class="py-2 px-4 rounded-full w-full form-input placeholder-gray-400 text-gray-500 appearance-none block focus:outline-none bg-gray-300">
          </fieldset>

          <div>
            <VButton content="Save filters" class="bg-neutral-900 text-white py-2 px-4 rounded-full" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
