<script setup>
import Flag from "@/components/subcomponents/Flag.vue";
</script>

<template>
  <div class="flex justify-between items-center mt-5">
    <div class="flex gap-5">
      <p class="font-bold">Alumates</p>

      <div class="relative">
        <div class="flex items-center">
          <img
            src="../assets/images/flags/ghanaianflag.svg"
            alt="flag"
            class="pr-2"
          />

          <img src="../assets/images/arrowdown.svg" alt="arrow" />
        </div>

        <div
          class="shadow-md bg-white rounded-lg p-1 w-44 absolute top-6 -left-4 hidden"
        >
          <Flag
            flag_img="/assets/images/flags/nigerianflag.svg"
            flag_name="Nigeria"
            :class="{ 'rounded-lg bg-gray-100': true }"
          />

          <Flag
            flag_img="/assets/images/flags/ghanaianflag.svg"
            flag_name="Ghana"
          />

          <Flag
            flag_img="/assets/images/flags/frenchflag.svg"
            flag_name="France"
          />
        </div>
      </div>
    </div>

    <div>
      <img src="../assets/images/hamburger.svg" alt="flag" class="pr-2" />
    </div>
  </div>
</template>
