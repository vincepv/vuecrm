<script setup>
import { ref } from "vue";

const isLogIn = ref(true);


</script>

<template>
  <p>Composant avec des conditions d'affichage</p>

  <div v-if="isLogIn">
    <h1>Vous êtes bien identifié</h1>
  </div>

  <div v-else>
    <h1>Identifiez-vous</h1>
    <p>Saisir votre mot de passe / login</p>
  </div>

  <button class="btn btn-primary" @click="isLogIn = !isLogIn">Valider</button>
</template>


<style>
</style>