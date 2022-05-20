<script setup>
defineProps({
  pText: {
    type: String,
    required: true,
  },
  linkText: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="background">
    <div>
      <p>
        {{ pText }} <a href="#">{{ linkText }}</a>
      </p>
    </div>
  </div>

  <div>
    <div></div>
  </div>

  <div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
.background {
  position: absolute;
  width: 990px;
  height: 990px;
  left: -52px;
  top: -605px;

  background: radial-gradient(
    46.38% 51.88% at 50% 50%,
    rgba(176, 0, 178, 0.37) 0%,
    rgba(147, 0, 156, 0) 98.66%
  );
  opacity: 0.5;
}
</style>
