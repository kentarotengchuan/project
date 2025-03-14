<template>
  <button class="btn">
    <slot>ボタン</slot>
  </button>
</template>

<style scoped>
.btn {
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
}
</style>