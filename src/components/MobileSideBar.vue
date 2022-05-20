<script setup></script>

<template>
  <div class="backdrop_filter">
    <div class="mobile_sidebar">
      <div>Close</div>

      <div>
        <div>Login</div>

        <div>Sign Up</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backdrop_filter {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;

  background: rgba(196, 196, 196, 0.46);
  backdrop-filter: blur(7px);
}

.mobile_sidebar {
  position: absolute;
  width: 150px;
  height: 100vh;
  left: 264px;
  top: 0px;

  background: #fff;
}
</style>
