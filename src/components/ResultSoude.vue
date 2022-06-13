<template>

<table>
  <tr>
    <th>Quantité huile</th>
    <th>Quantité soude</th>
    <th>Surgras</th>
  </tr>
  <tr>
    <td>{{huile}}</td>
    <td>{{soude}}</td>
    <td>0%</td>
  </tr>
  <tr>
    <td>{{huile}}</td>
    <td>{{soude*0.99}}</td>
    <td>1%</td>
  </tr>
  <tr>
    <td>{{huile}}</td>
    <td>{{soude*0.98}}</td>
    <td>2%</td>
  </tr>
  <tr>
    <td>{{huile}}</td>
    <td>{{soude*0.97}}</td>
    <td>3%</td>
  </tr>
  <tr>
    <td>{{huile}}</td>
    <td>{{soude*0.97}}</td>
    <td>3%</td>
  </tr>

</table>

<p v-for="indice in surgras" :key="indice.id">{{indice}} </p>
  
</template>

<script setup>

const props = defineProps({
  huile : Number,
  soude : Number,
})

const surgras = [0.99,0.98,0.97]

</script>

<style>

</style>