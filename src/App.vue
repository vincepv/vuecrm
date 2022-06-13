<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav class="fs-1 d-flex justify-content-evenly main-menu">
        <RouterLink class="link-dark"  to="/">Home</RouterLink>
        <RouterLink class="link-dark" to="/about">About</RouterLink>
        <RouterLink class="link-dark" to="/article">Article</RouterLink>
      </nav>
    </div>
    
  </header>

  <RouterView />
</template>

<style>

</style>
