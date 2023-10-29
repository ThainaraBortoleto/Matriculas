<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Header from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>

<template>
  <main>
    <Header />
    <TheWelcome />
    <FooterComponent class="absolute bottom-0 w-full"/>
  </main>
</template>
