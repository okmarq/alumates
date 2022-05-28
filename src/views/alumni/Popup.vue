<template>
<!-- add the blur css to the main layout page itself -->
  <div class="absolute z-50 -top-5 left-0 w-full h-full text-center">
    <div class="backdrop-blur grid place-items-center h-screen">
      <router-view />
    </div>
  </div>
</template>
