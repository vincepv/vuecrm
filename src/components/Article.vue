<script setup>
import { ref } from "vue";
import Contact from "./Contact.vue";
import Artist from "./Artist.vue";
import ResultSoude from "./resultSoude.vue";

// reactive state

const huile = ref(0);
const soude = ref(0);
const indice = 0.13;
// functions that mutate state and trigger updates

function calculeSoude() {
  soude.value = huile.value * indice;
}

function reset() {
  huile.value = 0;
  soude.value = 0;
}
</script>

<template>
  <div class="container">
    <h1>Calculateur de savon</h1>
    <div class="row">
      <div class="col">
        <p>Saisir la quantité d'huile d'olive</p>
      </div>
      <div class="col">
        <input type="number" v-model="huile" />
        <button class="btn btn-primary" @click="calculeSoude">Calculer</button>
        <button class="btn btn-danger" @click="reset">Reset</button>
      </div>
    </div>

    <ResultSoude :huile="huile" :soude="soude"></ResultSoude>

    <Contact prenom="Lapape" nom="Marc" age="41" />

    <Artist />
  </div>
</template>