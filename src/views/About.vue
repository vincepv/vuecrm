<script setup>
import {ref} from 'vue';
import Sold from '@/components/Sold.vue';
import Condition from '@/components/Condition.vue';
import {useProductStore} from '@/stores/ProductStore.js';

const store = useProductStore();
const  title = ref("Default title");

</script>


<template>
  <div>
    <h1>About us</h1>
    <p >-50% SALES</p>
    <h1>{{title}}</h1>
  </div>
  <Sold @changetitle = "(n)=> title = n" @resettitle="(n)=>title=n"/>
  <Condition />

  <h2>Store pinia test</h2>
  <p v-for="product in store.products" :key="product.name">
    Produit : {{product.name}} /
    Price €: {{product.price}} 
  </p>
</template>




