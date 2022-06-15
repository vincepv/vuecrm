<template>
  <div class="card m-3">
    <div class="card-body">
      <p class="card-title fs-6 fw-bold">
        <i class="bi bi-person"></i>
        {{ title }} {{ id }}
      </p>
      <p id="description" class="text-muted fw-light">from: {{ contact }} {{ dateStart }}</p>
      <div class="row">
        <div class="col">
          <p class="badge rounded-pill bg-primary">{{ departement }}</p>
        </div>
        <div class="col d-flex justify-content-end">
          <i class="bi bi-three-dots-vertical"></i>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script setup>
const title = "Traffic Main Street";
const contact = "Lewis Hamilton";
const text = "Ask boss to upgrade equipement for all kids.";
const id = "#0344";
const departement = "ROAD";
const dateStart = "03-12-2022";
const dateEnd = "15/08/22";
</script>

<style scoped>
#description {
  font-size: 14px;
}
</style>
