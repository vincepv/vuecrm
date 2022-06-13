<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav class="fs-1 d-flex justify-content-evenly">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/article">Article</RouterLink>
      </nav>
    </div>
    
  </header>

  <RouterView />
</template>

<style>


.logo {
  text-align: center;
}
</style>
