<template>
  <div class="card m-2">
    <div class="card-body">
      
      <h5 class="card-title">{{ title }} {{id}}</h5>
      <p class="text-muted">from: {{ contact }} {{dateStart}} </p>
      <p class="badge bg-secondary">{{ departement }}</p>
      
      <div class="row">
        <div class="col d-grid gap-2 ">
          <button type="button" class="btn btn-primary ">Edit</button>
        </div>
        
        <div class="col d-grid gap-2">
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = "Soccer club city playground ";
const contact = "Marco Polo";
const text = "Ask boss to upgrade equipement for all kids.";
const id = "#4627";
const departement = "SPORT";
const dateStart = "23-07-2022";
const dateEnd = "15/08/22";
</script>
