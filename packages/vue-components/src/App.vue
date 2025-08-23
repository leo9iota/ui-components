<template>
  <AppsCard 
    :onAppClick="handleAppClick"
    :onAddApp="handleAddApp"
  />
</template>

<script setup lang="ts">
import AppsCard from './components/AppsCard.vue'

const handleAppClick = (appName: string) => {
  console.log('App clicked:', appName);
  alert(`Clicked: ${appName}`);
}

const handleAddApp = () => {
  console.log('Add App button clicked');
  alert('Add App button clicked!');
}
</script>