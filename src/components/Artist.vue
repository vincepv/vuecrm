<template>
  <h1>Artistes</h1>

  <li v-for="item in items" :key="item.id">
    Artiste : {{ item.artiste }} - Album {{item.album}}
  </li>

  <li v-for="fruit in fruits" :key="fruit.id">
    Fruit: {{fruit}}
  </li>

  <li v-for="instrument in instruments" :key="instrument.id">
  {{instrument.marque}}
  </li>
</template>


<script setup>

  const items = [
    {artiste: 'Bob', album: 'Muffin'},
    {artiste: 'Marley', album:'Rock'}
  ];
  const name= [{ message: 'Queen' }, { message: 'John' }];

  const fruits = ["Apple", "Banana", "Orange"];
  const instruments = [
    {marque:'fender'},
    {marque:'gibson'}
  ]
</script>

