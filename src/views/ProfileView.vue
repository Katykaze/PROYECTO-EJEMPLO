<template>
  <l-main>
    <template #header>
      <h2 class="v-profile__tittle">Perfil Personal</h2>
    </template>
    <template #main>
      <article class="v-profile__wrapper">
        <section class="v-profile__infoRoutes">
          <div class="v-profile__wrapper--dropdown">
            <CDropdown
              :options="grades"
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
        <CMessage v-if="showMessage" class="v-profile__message text-l-medium">{{
          message
        }}</CMessage>
        <section class="v-profile__formRoutes">
          <CInput
            v-model:src="name"
            placeholder="Nombre"
            class="v-profile__cinput text-m-book"
          ></CInput>
          <CInput
            v-model:src="crag"
            placeholder="Lugar"
            class="v-profile__cinput text-m-book"
          ></CInput>
          <CInput
            v-model:src="grade"
            placeholder="Grado"
            class="v-profile__cinput text-m-book"
          ></CInput>
        </section>
        <section class="v-profile__buttons">
          <CButton @click="doSubmit()" class="v-profile__button--add">Enviar</CButton>
          <CButton @click="goBack()" class="v-profile__button--out">Atrás</CButton>
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
import CMessage from '../components/c-message.vue'
import { routesStore } from '../stores/routes'
export default {
  name: 'Profile',
  components: {
    LMain,
    CInput,
    CButton,
    CDropdown,
    CRoute,
    CMessage
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
      selectedOption: '',
      message: ''
    }
  },
  computed: {
    showMessage() {
      return this.message !== ''
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
        this.grades = await useRouteStore.getinfoDropdown()
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
    },
    async doSubmit() {
      if (this.grade === '') {
        return (this.message = 'Por favor rellene al menos el grado de la ruta')
      }
      try {
        const route = {
          name: this.name,
          crag: this.crag,
          grade: this.grade
        }
        const useRouteStore = routesStore()
        this.routes = await useRouteStore.addRoute(route)
        //Object.assign(this.$data, this.$options.data.apply(this))
        this.message = 'Ruta Añadido'
      } catch (e) {
        console.log(e)
      }
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
.v-profile__wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}
/*dropdowns style */
.v-profile__wrapper--dropdown {
  //width: 100%;
  padding: 30px;
  //display: flex;
  //border: 2px solid white;
  background: var(--color-background-box-gradient);
  border-radius: 10px;
}
.v-profile__dropdown {
  //border: 2px solid yellow;
  display: flex;
  justify-content: center;
}
/*button styles */
.v-profile__buttons {
  display: flex;
  margin-bottom: 50px;
  margin-top: 50px;
  width: 100%;
  justify-content: center;
  gap: 7%;
  padding: 20px;
}

/*table styles */
.v-profile__wrapper--table {
  margin: 10px 70px 70px;
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
.v-profile__formRoutes {
  display: flex;
  width: 100%;
  gap: 30px;
}
.v-profile__cinput {
  background: var(--color-light-secondary);
  color: var(--color-background-input);
  padding: 10px;
}
.v-profile__cinput::placeholder{
  color: var(--color-background-input);
}
.v-profile__button {
  display: flex;
  margin-bottom: 50px;
  width: 100%;
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
  .v-profile__formRoutes {
    flex-direction: column;
    justify-items: center;
    border: 2px solid white;
  }
}
</style>
