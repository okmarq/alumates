<script setup>
import Badge from "@/components/subcomponents/Badge.vue";
import Step from "@/components/subcomponents/Step.vue";
import MobileHero from "@/components/MobileHero.vue";
import InputField from "@/components/subcomponents/InputField.vue";
import FormTitle from "@/components/subcomponents/FormTitle.vue";

defineProps({
	step1: 'What’s state was your school in?',
	step2: 'What’s city was your school in?',
	step3: 'What’s the name of your school?'
})
</script>

<template>
  <MobileHero />

  <div class="relative my-5">
    <div class="flex justify-between px-4">
      <Step step_name="1" :class="{ 'bg-fuchsia-800 text-white': true }" />

      <Step
        step_name="2"
        :class="{ 'bg-white selection:text-fuchsia-800': true }"
      />

      <Step
        step_name="3"
        :class="{ 'bg-white selection:text-fuchsia-800': true }"
      />
    </div>

    <div class="absolute top-4 -z-10 px-10 w-full">
      <hr class="border border-dashed border-fuchsia-800" />
    </div>

    <div class="flex justify-between py-1">
      <Badge badge_name="sokoto" />

      <Badge badge_name="Yamaltu-Deba" />

      <Badge badge_name="John Quincy" />
    </div>
  </div>

  <div class="relative bg-indigo-600 p-12 mx-auto rounded-2xl text-white">
    <div class="mb-10 px-10">
      <FormTitle title="What’s the name of your school?" />
    </div>

    <form action="#" class="space-y-4 relative z-10">
      <div class="relative text-gray-400 focus-within:text-gray-600">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3 opacity-50"
        >
          <path
            d="M12.5999 8.5917C12.5999 9.10593 12.4474 9.60861 12.1617 10.0362C11.876 10.4637 11.47 10.797 10.9949 10.9938C10.5198 11.1906 9.99702 11.2421 9.49267 11.1417C8.98832 11.0414 8.52504 10.7938 8.16143 10.4302C7.79781 10.0666 7.55018 9.60328 7.44986 9.09893C7.34954 8.59458 7.40103 8.07181 7.59782 7.59672C7.7946 7.12163 8.12785 6.71557 8.55542 6.42988C8.98299 6.14419 9.48567 5.9917 9.9999 5.9917C10.6895 5.9917 11.3508 6.26563 11.8384 6.75322C12.326 7.24082 12.5999 7.90214 12.5999 8.5917V8.5917Z"
            stroke="#151522"
            stroke-width="1.5"
          />
          <path
            d="M3.01675 7.07508C4.65842 -0.141583 15.3501 -0.13325 16.9834 7.08342C17.9417 11.3168 15.3084 14.9001 13.0001 17.1168C12.1935 17.8947 11.1165 18.3294 9.99592 18.3294C8.87529 18.3294 7.79835 17.8947 6.99175 17.1168C4.69175 14.9001 2.05842 11.3084 3.01675 7.07508Z"
            stroke="#151522"
            stroke-width="1.5"
          />
        </svg>

        <InputField
          type="text"
          placeholder="John Quincy Adams University"
          class="py-3 px-4 rounded-full w-full form-input border border-gray-900 bg-white placeholder-gray-400 text-gray-500 appearance-none block pl-9 focus:outline-none"
        />
      </div>

      <button type="submit" class="bg-black py-3 w-full rounded-full">
        Let's go!
      </button>
    </form>

    <img
      src="../assets/images/bg/ellipse.svg"
      alt="ellipse"
      class="absolute bottom-0"
    />
  </div>
</template>
