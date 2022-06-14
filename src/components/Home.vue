<script setup>
import Card from '@/components/Card.vue'

const totalPending = 16;
const totalReview = 3;
const totalSent = 8;
const totalTodo = 24;

</script>

<template>
  <div class="container">
  <h1 class="m-5">Workflow of the week</h1>
  <div class="row">

    
    <div class="col bg-light m-2">
      <h2>To Do {{totalTodo}}</h2>
      <div >
        <Card />
        <Card />
      </div>
      
    </div>
    <div class="col bg-light m-2">
      <h2>Pending {{totalPending}} </h2>
      <Card />
      
    </div>
    <div class="col bg-light m-2">
      <h2>Review {{totalReview}} </h2>
      <Card />
      <Card />
    </div>
    <div class="col bg-light m-2">
      <h2>Need to send {{totalSent}} </h2>
      <Card />
      <Card />
      <Card />
    </div>
  </div>

  </div>
 

</template>
