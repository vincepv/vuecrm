<script setup>
import Card from "@/components/Card.vue";
import Card2 from "@/components/Card2.vue";
import Card3 from "@/components/Card3.vue";

import Header from "@/components/Header.vue";


const totalPending = 16;
const totalReview = 3;
const totalSent = 8;
const totalTodo = 24;
</script>

<template>
  <div class="container my-2">
  
    <Header />
  
    <h2 class="mb-4">Dashboard Request</h2>

    <div class="row">
      <div class="col">
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-search"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="date, tag, contact..."
            aria-label="Username"
          />
        </div>
      </div>
      <div class="col d-flex justify-content-end">
        <button type="button" class="btn btn-primary">+ Add ticket</button>
      </div>
    </div>

    <div class="row mt-5">
      <div class=" col ">
        <h5 class="m-3" >To Do: {{ totalTodo }}</h5>
        <hr>
        <div class="scroller bg-light m-2 rounded-3">
          <Card2 />
          <Card3 />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div class="col ">
        <h5 class="m-3">Pending: {{ totalPending }}</h5>
        <hr>
        <div class="scroller col bg-light m-2 rounded-3">
          <Card3 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>

      <div class="col ">
        <h5 class="m-3">Review: {{ totalReview }}</h5>
        <hr>
        <div class="scroller col bg-light m-2 rounded-3">
          <Card3 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>
      <div class="col ">
        <h5 class="m-3">Sent: {{ totalSent }}</h5>
        <hr>
        <div class="scroller col bg-light m-2 rounded-3">
          <Card3 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.scroller {
  height: 66vh;
  overflow-y: scroll;
  scrollbar-color: rgb(94, 94, 94) rgb(249, 249, 249);
  scrollbar-width: thin;
}
</style>
