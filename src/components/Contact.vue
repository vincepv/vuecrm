<template>
  <h1>Contact composant</h1>
  <p>Informations : {{nom}} {{prenom}} {{age}} ans.</p>
</template>

<script setup>
const props = defineProps({
  nom: String,
  prenom: String,
  age: Number

})

</script>