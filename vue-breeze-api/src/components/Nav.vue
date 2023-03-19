<template>
  <div class="shadow bg-white">
  <div class="h-16 mx-auto px-5 flex items-center justify-between">
      <a class="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Vue Breeze API</a>
      
      <ul class="flex items-center gap-5">
        <template v-if="!authStore.user">
          <li><router-link :to="{name : 'Login'}" class="hover:text-cyan-500 transition-colors" href="">Login</router-link></li>
          <li><router-link :to="{name : 'Register'}" class="hover:text-cyan-500 transition-colors" href="">Register</router-link></li>
        </template>
        <template v-else>
          <li><router-link :to="{name : 'Home'}" class="hover:text-cyan-500 transition-colors" href="">Home</router-link></li>
          <li><button class="px-3 py-1 border-2 bg-indigo-500" @click="authStore.handleLogout">Logout</button></li>
        </template>
      </ul>     
  </div>
</div>
</template>

<script setup>
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore()
</script>

<style>

</style>