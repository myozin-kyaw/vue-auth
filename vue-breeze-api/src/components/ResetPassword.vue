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
          <div class="text-gray-700 text-center text-md my-3 font-bold">
            Reset Password
          </div>
          <form @submit.prevent="authStore.handleResetPassword(form)">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-password"
                >New Password</label
              ><input
                v-model="form.password"
                type="password"
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
                placeholder="Password"
              /><p class="text-red-400 text-sm" v-if="authStore.errors.password">
                {{ authStore.errors.password[0] }}
              </p>
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-password"
                >Confirm Password</label
              ><input
                v-model="form.password_confirmation"
                type="password"
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
                placeholder="Confirm Password"
              />
              <p class="text-red-400 text-sm" v-if="authStore.errors.password_confirmation">
                {{ authStore.errors.password_confirmation[0] }}
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
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue-demi";
import { useAuthStore } from "../store/auth";
import { useRoute } from 'vue-router';

const route = useRoute()

const authStore = useAuthStore()
const form = ref({
    password: "",
    password_confirmation: "",
    email: route.query.email,
    token: route.params.token
})
</script>

<style>

</style>