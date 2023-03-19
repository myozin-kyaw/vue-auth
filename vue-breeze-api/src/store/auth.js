import { defineStore } from "pinia";
import axios from "axios";
import { data } from "autoprefixer";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        authError: [],
        authStatus: null
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authError,
        status: (state) => state.authStatus
    },
    actions: {
        async getToken() {
            await axios.get('/sanctum/csrf-cookie')
        },
        async getUser() {
            await this.getToken()
            const data = await axios.get('/api/user')
            this.authUser = data.data
        },
        async handleLogin(data) {
            await this.getToken()
            try {
                await axios.post('/login', {
                    email: data.email,
                    password: data.password
                })
                this.router.push('/')
            } catch (error) {
                if (error.response.status == 422) {
                    this.authError = error.response.data.errors
                } 
            }
        },
        async handleRegister(data) {
            await this.getToken()
            try {
                await axios.post('/register', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation
                })
                this.router.push('/')
            } catch (error) {
                if (error.response.status == 422) {
                    this.authError = error.response.data.errors
                } 
            }
        },
        async handleLogout() {
            await axios.post('/logout')
            this.authUser = null
            this.router.push({name: 'Login'})
        },
        async handleForgotPassword(data) {
            await this.getToken()
            try {
                const response = await axios.post('/forgot-password', {
                    email: data.email
                })
                this.authStatus = response.data.status
            } catch (error) {
                if (error.response.status == 422) {
                    this.authError = error.response.data.errors
                } 
            }
        },
        async handleResetPassword(resetData) {
            try {
                const response = await axios.post('/reset-password', resetData)
                this.authStatus = response.data.status
                this.router.push('/login')
            } catch (error) {
                if (error.response.status == 422) {
                    this.authError = error.response.data.errors
                } 
            }
        }
    }
})