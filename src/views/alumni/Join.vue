<script setup>
import Badge from "@/components/Badge.vue"
import Step from "@/components/Step.vue"
import Hero from "@/components/Hero.vue"
import VInput from "@/components/VInput.vue"
import FormTitle from "@/components/FormTitle.vue"
import VButton from "@/components/VButton.vue"
import { reactive, ref, watchEffect } from "vue"
import ApiService from "@/services/ApiService"
import { useStore } from "vuex";
import { useRouter } from "vue-router"

const store = useStore()
const route = useRouter()
const page = ref(false)
const steps = reactive([
  {
    active: false,
    content: 'Continue',
    formData: '',
    input: {
      type: 'text',
      list: 'state',
      placeholder: 'Sokoto',
    },
    inputPadding: true,
    step_name: '1',
    title: 'What state was your school in?'
  },
  {
    active: false,
    content: 'Continue',
    formData: '',
    input: {
      type: 'text',
      list: 'city',
      placeholder: 'Yamaltu-Deba'
    },
    inputPadding: true,
    step_name: '2',
    title: 'What city was your school in?'
  },
  {
    active: false,
    content: "Let's go!",
    formData: '',
    input: {
      type: 'text',
      list: 'school',
      placeholder: 'John Quincy Adams University'
    },
    inputPadding: false,
    step_name: '3',
    title: 'What’s the name of your school?'
  }
])
const step = ref(0)
const payload = reactive({
  state: steps[0].formData,
  city: steps[1].formData,
  school: steps[2].formData
})
const states = reactive([])
const cities = reactive([])
watchEffect(() => {
  switch (route.currentRoute.value.name) {
    case "List":
      page.value = false
      break;

    default:
      page.value = true
      break;
  }
  return page.value
})
function getStateByName() {
  states.splice(0, states.length)
  ApiService.getStateByName(steps[0].formData)
    .then(function (response) {
      if (response.status === 200) {
        states.push(response.data)
        console.log(states)
      }
    })
    .catch(function (error) {
      console.error('Error', error)
    })
}
function getCityByName() {
  cities.splice(0, cities.length)
  ApiService.getCityByName(steps[1].formData)
    .then(function (response) {
      if (response.status === 200) {
        cities.push(response.data)
        console.log(cities)
      }
    })
    .catch(function (error) {
      console.error('Error', error)
    })
}
function onSubmit() {
  if (steps[step.value].step_name === '1' && steps[step.value].formData != '') {
    store.commit('updateState', steps[0].formData)
    getStateByName()
  }
  if (steps[step.value].step_name === '2' && steps[step.value].formData != '') {
    store.commit('updateCity', steps[1].formData)
    getCityByName()
  }
  if (steps[step.value].step_name === '3' && steps[step.value].formData != '') {
    store.commit('updateSchool', steps[2].formData)
    joinAlumni(payload)
  }
}
function formBtn() {
  if (step.value < steps.length - 1 && steps[step.value].formData != '') {
    step.value++
  }
}
function formBtnPrev() {
  if (step.value > 0) {
    step.value--
  }
}
</script>

<template>
  <Hero v-if="page" />

  <div class="relative mt-5">
    <div class="flex justify-between items-center px-4">
      <Step :step_name="steps[0].step_name"
        :class="steps[0].formData != '' ? 'bg-[#93009C] text-white' : 'bg-white text-[#93009C]'" />
      <Step :step_name="steps[1].step_name"
        :class="steps[1].formData != '' ? 'bg-[#93009C] text-white' : 'bg-white text-[#93009C]'" />
      <Step :step_name="steps[2].step_name"
        :class="steps[2].formData != '' ? 'bg-[#93009C] text-white' : 'bg-white text-[#93009C]'" />
    </div>

    <div class='absolute top-4 -z-10 px-10 w-full'>
      <hr class="border border-dashed border-[#93009C]" />
    </div>
  </div>

  <div class="flex justify-between items-center mb-5">
    <Badge :badge_name="steps[0].formData" :class="steps[0].formData != '' ? '' : 'invisible'" class="w-28" />

    <Badge :badge_name="steps[1].formData" :class="steps[1].formData != '' ? '' : 'invisible'" class="w-28" />

    <Badge :badge_name="steps[2].formData" :class="steps[2].formData != '' ? '' : 'invisible'" class="w-28" />
  </div>

  <div class="relative bg-[#6979F8] p-12 mx-auto rounded-2xl text-white mt-16">
    <img src="../../assets/images/bg/ellipse.svg" alt="ellipse" class="absolute bottom-0 right-0" />

    <form @submit.prevent="onSubmit" class="space-y-4 relative z-10">
      <fieldset>
        <legend class="mb-10 px-8">
          <FormTitle class="font-bold text-xl text-[#FAF2FA]" :title="steps[step].title" />
        </legend>

        <div class="relative text-gray-400 focus-within:text-gray-600">
          <svg v-show="steps[step].inputPadding" width="20" height="20" viewBox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3 opacity-50">
            <path
              d="M12.5999 8.5917C12.5999 9.10593 12.4474 9.60861 12.1617 10.0362C11.876 10.4637 11.47 10.797 10.9949 10.9938C10.5198 11.1906 9.99702 11.2421 9.49267 11.1417C8.98832 11.0414 8.52504 10.7938 8.16143 10.4302C7.79781 10.0666 7.55018 9.60328 7.44986 9.09893C7.34954 8.59458 7.40103 8.07181 7.59782 7.59672C7.7946 7.12163 8.12785 6.71557 8.55542 6.42988C8.98299 6.14419 9.48567 5.9917 9.9999 5.9917C10.6895 5.9917 11.3508 6.26563 11.8384 6.75322C12.326 7.24082 12.5999 7.90214 12.5999 8.5917V8.5917Z"
              stroke="#151522" stroke-width="1.5" />
            <path
              d="M3.01675 7.07508C4.65842 -0.141583 15.3501 -0.13325 16.9834 7.08342C17.9417 11.3168 15.3084 14.9001 13.0001 17.1168C12.1935 17.8947 11.1165 18.3294 9.99592 18.3294C8.87529 18.3294 7.79835 17.8947 6.99175 17.1168C4.69175 14.9001 2.05842 11.3084 3.01675 7.07508Z"
              stroke="#151522" stroke-width="1.5" />
          </svg>

          <label :for="steps[step].input.list" class=""></label>
          <VInput :id="steps[step].input.list" v-model.trim="steps[step].formData" v-bind="steps[step].input" required
            class="border border-[#151522] bg-white" :class="steps[step].step_name != '3' ? 'pl-9' : ''" />
          <datalist :id="steps[step].input.list">
            <option value="Internet Explorer" />
            <option value="Firefox" />
            <option value="Chrome" />
            <option value="Opera" />
            <option value="Safari" />
          </datalist>
        </div>
      </fieldset>

      <VButton type="submit" v-bind:content="steps[step].content" class="bg-[#22151F] py-3 w-full rounded-full" />
    </form>
  </div>

  <router-view />
</template>
