<template>
  <div class="card m-3">
    <div class="card-body">
      <p class="card-title fs-5">
        <i class="bi bi-envelope"></i>
        {{ title }} {{id}}
      </p>
      <p class="text-muted fw-light">from: {{ contact }} {{dateStart}} </p>
      <div class="row">
        <div class="col">
          <p class="badge rounded-pill bg-info">{{ departement }}</p>
        </div>
        <div class="col d-flex justify-content-end">
          <i class="bi bi-three-dots-vertical"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = "Charity food";
const contact = "Barack Obama";
const text = "Ask boss to upgrade equipement for all kids.";
const id = "#7633";
const departement = "CHARITY";
const dateStart = "23-07-2022";
const dateEnd = "15/08/22";
</script>
