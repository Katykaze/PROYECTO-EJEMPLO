import { defineStore } from 'pinia'
import { fetchStore } from './fetch'

export const climbersStore = defineStore('climbers', {
   state: () => ({
      climbers: null
   }),

   actions: {
      async fetchClimbers() {
         const method = 'GET'
         const url = '/climbers/getAll'
         return fetchStore()
            .doRequest({ url, method })
            .then((res) => {
               this.climbers = res
               return res
            })
            .catch((error) => {
               console.log(error)
               return false
            })
      }
   }
})
