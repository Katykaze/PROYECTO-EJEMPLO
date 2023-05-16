import { defineStore } from 'pinia'
import { fetchStore } from './fetch'

export const climbersStore = defineStore('climbers', {
  state: () => ({
    climbers: null
  }),

  actions: {
    fetchClimbers() {
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
    },

    addClimber(climber) {
      const method = 'POST'
      const url = '/climbers/new'
      return fetchStore()
        .doRequest({ url, method, payload: climber })
        .then((res) => {
          this.climbers = res
          return res
        })
        .catch((error) => {
          console.log(error)
          return false
        })
    },

    getClimberById(id) {
      return this.climbers.find((climber) => climber.id === id)
    },
    async modifyClimber(updatedClimber) {
      console.log('modifyClimber called')
      console.log('updatedClimber:', updatedClimber)
      const method = 'PUT'
      const url = '/climbers/mod'
      return fetchStore()
        .doRequest({ url, method, payload: updatedClimber })
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
