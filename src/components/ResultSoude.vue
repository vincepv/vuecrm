<script setup>
const props = defineProps({
  huile: Number,
  soude: Number,
});

const surgras = [0.99, 0.98, 0.97, 0.96, 0.95];
</script>

<template>
  <table>
    <tr>
      <th>Indice surgras %</th>
      <th>Quantité soude (g)</th>
      <th>Quantité huile (g)</th>
    </tr>
    <tr v-for="indice in surgras" :key="indice.id">
      <td>{{ Math.floor((1 - indice) * 100) }}</td>
      <td>{{ Math.floor(soude * indice) }}</td>
      <td>{{ huile }}</td>
    </tr>
  </table>
</template>
