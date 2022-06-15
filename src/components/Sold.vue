<template >
  <button type="button" @click="$emit( 'changetitle', titrevpv )" >Update me</button>
  <button type="button" @click="$emit( 'resettitle', 'Reset' )" >Reset</button>

</template>

<script setup>

const titrevpv = "hello titre enfant"

</script>
