<template>
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
  />
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
  />

  <section class="bg-blueGray-50">
    <div class="w-full lg:w-4/12 px-4 mx-auto pt-6">
      <div
        class="
          relative
          flex flex-col
          min-w-0
          break-words
          w-full
          mb-6
          shadow-lg
          rounded-lg
          bg-blueGray-200
          border-0
        "
      >
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <div class="text-gray-800 text-center my-3 font-bold">
            Forgot Password
          </div>
          <form @submit.prevent="authStore.handleForgotPassword(form)">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-password"
                >Email</label
              >
              <input
                v-model="form.email"
                type="email"
                class="
                  border-0
                  px-3
                  py-3
                  placeholder-blueGray-300
                  text-blueGray-600
                  bg-white
                  rounded
                  text-sm
                  shadow
                  focus:outline-none focus:ring
                  w-full
                  ease-linear
                  transition-all
                  duration-150
                "
                placeholder="Email"
              />
              <p class="text-red-400 text-sm" v-if="authStore.errors.email">
                {{ authStore.errors.email[0] }}
              </p>
              <p class="text-green-400 text-sm" v-if="authStore.status">
                {{ authStore.status }}
              </p>
            </div>
            <div class="text-center mt-6">
              <button
                class="
                  bg-blueGray-800
                  text-white
                  active:bg-blueGray-600
                  text-sm
                  font-bold
                  uppercase
                  px-6
                  py-3
                  rounded
                  shadow
                  hover:shadow-lg
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-1
                  w-full
                  ease-linear
                  transition-all
                  duration-150
                "
                type="submit"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore()

const form = ref({
  email: "",
});

</script>

<style>
</style>