<template>
  <div class="row">
    <div class="col-10">
      <Breadcrumb />
    </div>
    <div class="col-1">
      <Notification />
    </div>
    <div class="col-1">
      <LogOut />
    </div>
  </div>
</template>

<script setup>
import LogOut from "@/components/LogOut.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Notification from "@/components/Notification.vue";
</script>

<style>
</style>