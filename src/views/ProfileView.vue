<template>
  <l-main>
    <template #header>
      <h2 class="v-profile__tittle">Perfil Personal</h2>
    </template>
    <template #main>
      <article>
        <section class="v-profile__infoRoutes">
          <div class="v-profile__wrapper--dropdown">
            <CDropdown
              :options="grades"
              @selected="validateSelection"
              class="v-profile__dropdown"
            ></CDropdown>
            <CDropdown
              :options="crags"
              @selected="validateSelection"
              class="v-profile__dropdown"
            ></CDropdown>
          </div>
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
      crags: [],
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
    async generateDropDown() {
      try {
        const useRouteStore = routesStore()
        let res = await useRouteStore.getinfoDropdown()
        this.grades = res[0]
        this.crags = res[1]
      } catch (e) {
        console.log(e)
      }
    },
    async validateSelection(option) {
      try {
        this.selectedOption = option
        const useRouteStore = routesStore()
        this.routes = await useRouteStore.getRoutesByGrade(option)
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
    this.generateDropDown()
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
/*dropdowns style */
.v-profile__wrapper--dropdown {
  //width: 100%;
  padding: 30px;
  display: flex;
  //border: 2px solid white;
  background: var(--color-background-box-gradient);
  border-radius: 10px;
}
.v-profile__dropdown {
  //border: 2px solid yellow;
  display: flex;
  justify-content: center;
}
/*table styles */
.v-profile__wrapper--table {
  margin: 10px 70px 70px;
  //box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
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
/*@media table */
@media (max-width: 767px) {
  .v-profile__wrapper--dropdown {
    flex-direction: column;
  }
  .v-profile__dropdown {
    margin-bottom: 10px;
  }
  .v-profile__wrapper--table {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }
  .v-profile__table {
    display: block;
    margin-left: auto;
    margin-right: auto;
    //max-width: 100%;

    & thead,
    & tbody,
    & thead th {
      display: block;
    }
    & thead th:last-child {
      border-bottom: none;
    }
    & thead {
      float: left;
    }
    & tbody {
      width: auto;
      position: relative;
      overflow-x: auto;
    }
    & td,
    & th {
      padding: 20px 0.625em 0.625em 0.625em;
      height: 60px;
      vertical-align: middle;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      width: 120px;
      font-size: 15px;
      text-overflow: ellipsis;
    }
    & thead th {
      text-align: left;
    }
    & tbody tr {
      display: table-cell;
    }
    & tbody td {
      display: block;
      text-align: center;
    }
  }
  // .v-profile__wrapper--table:before {
  //   content: 'Scroll horizontally >';
  //   display: block;
  //   text-align: right;
  //   //font-size: 11px;
  //   padding: 0 0 10px;
  // }
}
</style>
