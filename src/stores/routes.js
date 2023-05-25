import { defineStore } from 'pinia'
import { fetchStore } from './fetch'

export const routesStore = defineStore('routes', {
  state: () => ({
    routes: []
  }),
  actions: {
    fetchRoutes() {
      const method = 'GET'
      const url = '/routes/getAll'
      return fetchStore()
        .doRequest({ url, method })
        .then((res) => {
          this.routes = res
          return res
        })
        .catch((error) => {
          console.log(error)
          return false
        })
    },
    getinfoDropdown() {
      const method = 'GET'
      const url = '/routes/getAll'
      return fetchStore()
        .doRequest({ url, method })
        .then((res) => {
          this.routes = res
          let grades = [...new Set(this.routes.map((route) => route.grade))]
          //console.log(this.grades + ' grados')
          return grades
        })
        .catch((error) => {
          console.log(error)
          return false
        })

      //return [... new Set(routes.map(route =>route.grade))]
    },
    getRoutesByGrade(grade) {
      const method = 'GET'
      const url = '/routes/getAll'
      return fetchStore()
        .doRequest({ url, method })
        .then((res) => {
          this.routes = res
          let routesByGrade = this.routes.filter((route) => route.grade === grade)
          return routesByGrade
        })
        .catch((error) => {
          console.log(error)
          return false
        })
    },
    addRoute(route) {
      const method = 'POST'
      const url = '/routes/new'
      return fetchStore()
        .doRequest({ url, method, payload: route })
        .then((res) => {
          this.routes = res
          return res
        })
        .catch((error) => {
          console.log(error)
          return false
        })
    }
  }
})
