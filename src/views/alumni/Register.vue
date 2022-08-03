<script setup>
import VInput from "@/components/VInput.vue"
import VButton from "@/components/VButton.vue"
</script>

<template>
  <div class="absolute -top-5 w-full h-full">
    <div class="backdrop-blur grid place-items-center h-screen">
      <div class="w-80 h-auto rounded-xl bg-white shadow-md flex flex-col justify-between gap-10 py-7 mx-auto relative border">
        <img src="../../assets/images/close.svg" alt="arrow"
          class="hover:scale-110 transition-all cursor-pointer absolute top-0 right-0 py-2 px-4" />

        <form class="text-center">
          <fieldset class="flex flex-col gap-6 px-6 text-sm">
            <div>
              <legend class="text-left font-semibold mb-2 pt-10">
                <label for="school_type">What type of school is it?</label>
              </legend>

              <VInput id="school_type" type="text" placeholder="Primary school"
                class="border-0 rounded-full bg-[#F1F1F1]" />
            </div>

            <div>
              <legend class="text-left font-semibold mb-2">
                <label for="country">What country is your school in?</label>
              </legend>

              <VInput id="country" type="text" placeholder="Nigeria" class="border-0 rounded-full bg-[#F1F1F1]" />
            </div>

            <div>
              <legend class="text-left font-semibold mb-2">
                <label for="state">What state is situated?</label>
              </legend>

              <VInput id="state" type="text" placeholder="Kaduna" class="border-0 rounded-full bg-[#F1F1F1]" />
            </div>

            <div>
              <legend class="text-left font-semibold mb-2">
                <label for="school">What is the name of your school?</label>
              </legend>

              <VInput id="school" type="text" placeholder="Ahmadu Bello Primary School"
                class="border-0 rounded-full bg-[#F1F1F1]" />
            </div>

            <div class="py-4">
              <VButton content="Submit details" type="submit" class="bg-[#22151F] text-white py-2 px-4 rounded-full" />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>