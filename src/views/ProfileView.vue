<template>
  <l-main>
    <template #header>
      <h2 class="v-profile__tittle">Perfil Personal</h2>
    </template>
    <template #main>
      <article>
        <section class="v-profile__infoRoutes">
          <CDropdown :options="grades" @selectedOption="validateSelection"></CDropdown>
          <h2 v-if="error">Error en asincronia katy!</h2>
          <!--  <CRoute v-for="route in routes" :key="route.name" :src="route"></CRoute> -->
          <div class="v-profile__wrapper--table">
            <table class="v-profile__table text-l-medium">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Lugar</th>
                  <th>Grado</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="route in routes" :key="route.name">
                  <td>{{ route.name }}</td>
                  <td>{{ route.crag }}</td>
                  <td>{{ route.grade }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="v-profile__formRoutes">
          <CInput placeholder="Nombre" class="text-m-book"></CInput>
          <CInput placeholder="Lugar" class="text-m-book"></CInput>
          <CInput placeholder="Grado" class="text-m-book"></CInput>
        </section>
        <section class="v-profile__buttons">
          <CButton @click="doSubmit()">Enviar</CButton>
          <CButton @click="goBack()">Atrás</CButton>
        </section>
      </article>
    </template>
    <template #footer> </template>
  </l-main>
</template>
<script>
import LMain from '../layouts/l-main.vue'
import CInput from '../components/c-input.vue'
import CButton from '../components/c-button.vue'
import CDropdown from '../components/c-dropdown.vue'
import CRoute from '../components/c-route.vue'
//import { userStore } from '../stores/user'
import { routesStore } from '../stores/routes'
export default {
  name: 'Profile',
  components: {
    LMain,
    CInput,
    CButton,
    CDropdown,
    CRoute
  },
  data() {
    return {
      routes: [],
      grades: [],
      name: '',
      crag: '',
      grade: '',
      isPending: true,
      error: false,
      selectedOption: ''
    }
  },
  methods: {
    async getAllRoutes() {
      try {
        const useRouteStore = routesStore()
        this.routes = await useRouteStore.fetchRoutes()
        console.log(this.routes)
        this.isPending = false
      } catch (e) {
        console.log(e)
        this.error = true
      }
    },
    async getGradesforDropDown() {
      try {
        const useRouteStore = routesStore()
        this.grades = await useRouteStore.getGrades()
      } catch (e) {
        console.log(e)
      }
    },
    async validateSelection(option) {
      try {
        this.selectedOption = option
        const useRouteStore = routesStore()
        this.routes = await useRouteStore.getRoutesByGrade()
        console.log(this.routes + ' rutas ordenadas')
        console.log(this.selectedOption)
      } catch (e) {
        console.log(e)
      }
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  created() {
    this.getAllRoutes()
    this.getGradesforDropDown()
  },
  updated(){
    this.validateSelection()
  }
}
</script>
<style lang="scss" scoped>
.v-profile__tittle {
  margin-top: 50px;
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
  display: inline-block;
}
/*table styles */
.v-profile__wrapper--table {
  margin: 10px 70px 70px;
  box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
  //background: var(--color-background-box-gradient);
}
.v-profile__table {
  border-radius: 5px;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;

  & td,
  & th {
    text-align: center;
    padding: 8px;
  }
  & thead th {
    color: var(--color-white);
    background: var(--color-secondary);
  }
  & thead th:nth-child(odd) {
    color: var(--color-white);
    background: var(--color--orange-red);
  }

  & tr:nth-child(even) {
    color: var(--color-white);
    background: var(--color-secondary);
  }
}
</style>
