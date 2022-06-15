<script setup>
import Card from "@/components/Card.vue";
import Card2 from "@/components/Card2.vue";
import Card3 from "@/components/Card3.vue";

const totalPending = 16;
const totalReview = 3;
const totalSent = 8;
const totalTodo = 24;
</script>

<template>
  <div class="container">
    <h2 class="my-2">Dashboard Request</h2>

    <div class="row">
      <div class="col">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Search by</span>
          <input
            type="text"
            class="form-control"
            placeholder="date, tag, contact..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div class="col d-flex justify-content-end">
        <button type="button" class="btn btn-secondary">+ Add ticket</button>
      </div>
    </div>

    <div class="row">
      <div class=" col ">
        <h5 class="m-3">To Do: {{ totalTodo }}</h5>
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
  min-height: 500px;
  max-height: 700px;
  overflow-y: scroll;
  scrollbar-color: rgb(38, 37, 37) rgb(249, 249, 249);
  scrollbar-width: large;
}
</style>
