import { defineStore } from 'pinia'
import { fetchStore } from './fetch'

export const userStore = defineStore('user', {
   state: () => ({
      isLogged: false
   }),

   actions: {
      async login({ username, password }) {
         const method = 'POST'
         const url = '/user/login'
         const payload = { username, password }
         return fetchStore()
            .doRequest({ method, url, payload })
            .then((res) => {
               this.isLogged = true
               return res
            })
            .catch(() => {
               this.isLogged = false
               return false
            })
      },

      logout() {
         this.isLogged = false
      }
   }
})
