<template>
  <l-main>
    <template #header> </template>
    <template #main>
      <article>
        <section class="v-profile__infoRoutes">
          <CDropdown :options="grades" v-on:selectedOption="validateSelection"></CDropdown>
          <h2 v-if="error">Error en asincronia katy!</h2>
          <!--  <CRoute v-for="route in routes" :key="route.name" :src="route"></CRoute> -->
          <table>
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
          <p v-for="grade in grades">{{ grade }}</p>

          <!--             v-on:selected="validateSelection"
            v-on:filter="getDropdownValues"
            :disabled="false" -->
          
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
      selectedOption:{}
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
    validateSelection(selection){
      this.selectedOption = selection
      console.log(selected.name + ' has been selected');
    }
  },
  created() {
    this.getAllRoutes()
    this.getGradesforDropDown()
  }
}
</script>
