<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Card :movie="{ title: 'Titanic' }" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/Card.vue";

export default defineComponent({
  name: "Home",
  components: {
    Card
  }
});
</script>
