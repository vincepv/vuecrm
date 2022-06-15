<template>
  <div>
    <h1>About us</h1>
    <p >-50% SALES</p>
    <h1>{{title}}</h1>
  </div>
  <Sold @changetitle = "(n)=> title = n" @resettitle="(n)=>title=n"/>
</template>

<script setup>
import {ref} from 'vue'
import Sold from '@/components/Sold.vue'

const  title = ref("Default title");

</script>



