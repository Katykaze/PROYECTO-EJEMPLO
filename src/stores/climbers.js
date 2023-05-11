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

    async addClimber(climber) {
      const method = 'POST'
      const url = '/climbers/new'
      await this.fetchClimbers()
      let lastId = this.getLastIdClimber()
      let numberLastId=parseInt(lastId) + 1
      console.log(numberLastId)
      lastId = numberLastId.toString()
      const newClimber = { id: lastId,...climber}
      return fetchStore()
        .doRequest({ url, method, payload: newClimber })
        .then((res) => {
          this.climbers = res
          return res
        })
        .catch((error) => {
          console.log(error)
          return false
        })
    },
    getLastIdClimber() {     
        const [lastClimber] = this.climbers.slice(-1)
        console.log('ultimo escalador', JSON.stringify(lastClimber))
        return lastClimber.id      
    },

    getClimberById(id) {
      return this.climbers.find((climber) => climber.id === id)
    }
  }
})
