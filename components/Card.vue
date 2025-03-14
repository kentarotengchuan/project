<script setup>
defineProps({
  title: String,
  content: String
});
</script>

<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<style scoped>
.card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>