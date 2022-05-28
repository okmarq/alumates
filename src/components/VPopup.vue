<script setup>
import VButton from "@/components/subcomponents/VButton.vue"
import VButtonStore from "@/components/subcomponents/VButtonStore.vue"
import VInput from "@/components/subcomponents/VInput.vue"
import FormTitle from "@/components/subcomponents/FormTitle.vue"

import { useStore } from 'vuex'

const store = useStore()

const button = {
  playstore: {
    content1: "Get on",
    content2: "Playstore"
  },
  appstore: {
    content1: "Get on",
    content2: "App Store"
  }
}
const popupData = {
  noAlumni: {
    title: "Oops ...",
    body: "It looks like your Alumni isn’t registered yet. Will you do us the honor?",
    button: {
      content: "Register my alumni"
    }
  },
  alumniJoined: {
    title: "Way to go!",
    body: "You’re now part of your Alumni network. Download the Alumates App to say hello",
  },
  noConnect: {
    body: "To connect with this user and the rest of your Alumni and friends, download the Alumates App"
  }
}
</script>

<template>
  <div class="absolute -top-5 w-full h-full" :class="{ 'hidden': true }">
    <div class="backdrop-blur grid place-items-center h-screen">
      <div class="w-80 h-64 rounded-xl bg-white shadow-md flex flex-col justify-between gap-10 py-7 mx-auto relative"
        :class="{ 'hidden': true }">
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

      <div class="w-80 h-64 rounded-xl bg-white shadow-md flex flex-col justify-between gap-10 py-7 mx-auto relative"
        :class="{ 'hidden': true }">
        <img src="../../assets/images/close.svg" alt="arrow"
          class="hover:scale-110 transition-all cursor-pointer absolute top-0 right-0 py-2 px-4" />

        <div class="px-10">
          <h2 class="font-semibold text-xl mb-4">{{ popupData.alumniJoined.title }}</h2>

          <p class="font-semibold text-sm">{{ popupData.alumniJoined.body }}</p>
        </div>

        <div class="flex items-center justify-center gap-4 text-white">
          <VButtonStore v-bind="button.playstore">
            <img src="../../assets/images/icons/playstore_white.svg" alt="icon">
          </VButtonStore>

          <VButtonStore v-bind="button.appstore">
            <img src="../../assets/images/icons/apple_white.svg" alt="icon">
          </VButtonStore>
        </div>
      </div>

      <div class="w-80 h-64 rounded-xl bg-white shadow-md flex flex-col justify-between gap-10 py-7 mx-auto relative"
        :class="{ 'hidden': true }">
        <img src="../../assets/images/close.svg" alt="arrow"
          class="hover:scale-110 transition-all cursor-pointer absolute top-0 right-0 py-2 px-4" />

        <div class="px-10">
          <p class="font-semibold text-sm leading-relaxed tracking-widest mt-4">{{ popupData.noConnect.body }}</p>
        </div>

        <div class="flex items-center justify-center gap-4 text-white">
          <VButtonStore v-bind="button.playstore">
            <img src="../../assets/images/icons/playstore_white.svg" alt="icon">
          </VButtonStore>

          <VButtonStore v-bind="button.appstore">
            <img src="../../assets/images/icons/apple_white.svg" alt="icon">
          </VButtonStore>
        </div>

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

      <div class="w-80 h-64 rounded-xl bg-white shadow-md flex flex-col justify-between gap-10 py-7 mx-auto relative"
        :class="{ 'hidden': true }">
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
