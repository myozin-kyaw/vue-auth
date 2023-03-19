<template>
    <h1 class="text-2xl font-bold" v-if="authStore.user">
        {{ authStore.user.name }} : {{ authStore.user.email }}
    </h1>
    <h1 class="text-2xl font-bold" v-else>
        Go and Login
    </h1>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core"
import { useAuthStore } from './../store/auth'

const authStore = useAuthStore()

onMounted(async () => {
    await authStore.getUser()
})
</script>

<style>

</style>