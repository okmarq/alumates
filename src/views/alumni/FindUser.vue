<script setup>
import VInput from "@/components/VInput.vue"
import VButton from "@/components/VButton.vue"
import { useStore } from 'vuex'

const store = useStore()
</script>

<template>
  <div class="absolute -top-5 w-full h-full">
    <div class="backdrop-blur grid place-items-center h-screen">
      <div class="w-80 h-auto rounded-xl bg-white shadow-md flex flex-col justify-between gap-10 py-7 mx-auto relative border">
        <img src="../../assets/images/close.svg" alt="arrow"
          class="hover:scale-110 transition-all cursor-pointer absolute top-0 right-0 py-2 px-4" />

        <form class="pt-3">
          <fieldset class="flex flex-col gap-6 px-6 text-sm">
            <div>
              <legend class="text-left font-semibold mb-2">
                <label for="course">Course of study</label>
              </legend>

              <VInput id="course" type="text" placeholder="What was their major?"
                class="border-0 rounded-full bg-[#F1F1F1]" />
            </div>

            <div>
              <legend class="text-left font-semibold mb-2">
                <label for="year">Year of graduation</label>
              </legend>

              <VInput id="year" type="text" placeholder="What year did they graduate?"
                class="border-0 rounded-full bg-[#F1F1F1]" />
            </div>

            <div class="">
              <VButton content="Save filters" type="submit" class="bg-[#22151F] text-white py-2 px-4 rounded-full" />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>
