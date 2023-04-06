<script setup>
import AppBar from './components/AppBar.vue'
import Logo from './components/Logo.vue'

</script>

<template>
  <div id="app">
    <AppBar/>
    <Logo />
    <b-container class="mt-4">
      
      <router-view />
    </b-container>
 
  </div>
</template>


