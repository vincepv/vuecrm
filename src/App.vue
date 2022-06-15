<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="row">
  <header class="col-2 bg-light ">
    <div class="m-2">
      <div>
        <div class="logo d-flex">
          <img alt="DigitaleBox logo" class="" src="@/assets/logo.png" width="40" height="40" />
          <p class="m-2 fw-lighter">DigitaleBox</p>
        </div>
        
        <hr>
        <nav class="fs-5 d-flex flex-column">
          <RouterLink class="link-dark"  to="/">
            <i class="bi bi-house"></i>
            Home
          </RouterLink>
          <RouterLink class="link-dark" to="/about">
            <i class="bi bi-gear"></i>
            About
          </RouterLink>
          <RouterLink class="link-dark" to="/article">
            <i class="bi bi-archive"></i>
            Calculateur
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <div class="col-10">
    <RouterView />
  </div>

  </div>
</template>

<style scoped>
.logo {
  box-sizing: border-box;
  overflow-wrap: break-word;
  color:rgb(119, 118, 118)
}

header {
  height: 100vh;
}

nav a {
  text-decoration: none;
  overflow-wrap: break-word;

}

</style>

