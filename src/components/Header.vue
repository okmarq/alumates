<script setup>
import FrenchFlag from "../icons/FrenchFlag.vue"
import GhanaianFlag from "../icons/GhanaianFlag.vue"
import NigerianFlag from "../icons/NigerianFlag.vue"
</script>

<template>
  <div>
    <p></p>
    <form action="#">
      <select name="country" id="country">
        <option value="nigeria">France</option>
        <option value="ghana">Ghana</option>
        <option value="france">Nigeria</option>
      </select>
    </form>
  </div>

  <FrenchFlag />
  <GhanaianFlag />
  <NigerianFlag />

  <div>H</div>
</template>
