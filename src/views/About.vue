<script setup>
import {ref} from 'vue';
import Sold from '@/components/Sold.vue';
import Condition from '@/components/Condition.vue';
import { useProductStore } from '@/stores/ProductStore.js';
import Modal from '@/components/Modal.vue';
const  title = ref("Default title");

// make reactive store changes
const store = useProductStore();

// use method of the store
store.fill();

</script>


<template>
  <Modal/>
  <div>
    <h1 class="mt-5">Emit example: pass data from child to parent</h1>
    <h5>{{title}}</h5>
  </div>
  <Sold @changetitle = "(n)=> title = n" @resettitle="(n)=>title=n"/>
  <hr>
  <h1>Conditional rendering</h1>
  <Condition />
  <hr>
  <h2>State management : get value from store Pinia</h2>
  <div v-for="product in store.products" :key="product.name">
    Produit : {{product.name}} /
    Price €: {{product.price}} /
    RefId : {{product.id}}
  </div>
</template>




