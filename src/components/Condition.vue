<script setup>
import { ref } from "vue";

const isLogIn = ref(true);


</script>

<template>
  <p>Click for condition</p>

  <div v-if="isLogIn">
    <h5>Vous êtes bien identifié</h5>
  </div>

  <div v-else>
    <h5>Identifiez-vous</h5>
    <p>Saisir votre mot de passe / login</p>
  </div>

  <button class="btn btn-primary" @click="isLogIn = !isLogIn">Valider</button>
</template>


<style>
</style>