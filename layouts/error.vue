<template>
<div>エラーページです。</div>
</template>

<script setup>
defineProps(["error"]);
const handleClearError = () => clearError({ redirect: "/" });
</script>