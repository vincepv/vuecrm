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
  
    <p class="display-6 mb-4">Dashboard Request</p>

    <div class="row">
      <div class="col d-flex justify-content">
        <button type="button" class="btn btn-primary">+ Add ticket</button>
      </div>
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
    </div>

    <div class="row mt-5 ">
      <div class="col bg-light rounded-3 m-2">
        <h6 class="m-3 text-muted" >TO DO: {{ totalTodo }}</h6>
        <hr>
        <div class="scroller">
          <Card2 />
          <Card3 />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div class="col bg-light rounded-3 m-2">
        <h6 class="m-3 text-muted">PENDING {{ totalPending }}</h6>
        <hr>
        <div class="scroller">
          <Card3 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>

      <div class="col bg-light rounded-3 m-2 ">
        <h6 class="m-3 text-muted">REVIEW {{ totalReview }}</h6>
        <hr>
        <div class="scroller">
          <Card3 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>
      <div class="col bg-light rounded-3 m-2  ">
        <h6 class="m-3 text-muted">SENT {{ totalSent }}</h6>
        <hr>
        <div class="scroller">
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
  height: 60vh;
  overflow-y: scroll;
  scrollbar-color: rgb(94, 94, 94) rgb(249, 249, 249);
  scrollbar-width: thin;
}
</style>
