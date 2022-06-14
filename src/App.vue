<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="row">
  <header class="col-1">
    <div class="m-2">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
      <div>
        <nav class="fs-5 d-flex flex-column  ">
          <RouterLink class="link-dark"  to="/">Home</RouterLink>
          <RouterLink class="link-dark" to="/about">About</RouterLink>
          <RouterLink class="link-dark" to="/article">Article</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <div class="col-11">
    <RouterView />
  </div>

  </div>
</template>

<style>

</style>
