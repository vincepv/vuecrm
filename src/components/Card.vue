<template>
  <div class="card">
    <h5 class="card-header">Ticket {{id}}</h5>
    <div class="card-body">
      <h5 class="card-title">Soccer club - new equipments</h5>

      <p class="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <p>Assign to : {{departement}}</p>

      <a href="#" class="btn btn-primary">Open ticket</a>
      
    </div>
  </div>
</template>

<script setup>
const id = "#4627";
const departement = "SPORT";
const dateStart = "23/07/2022"
const dateEnd =  "15/08/2022"

</script>

<style>
</style>