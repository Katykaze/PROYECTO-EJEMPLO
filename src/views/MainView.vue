<template>
  <l-main>
    <template #header>
      <div class="l-main__header--tittle">Top Climbers</div>
    </template>
    <template #main>
      <h2 v-if="error">error</h2>
      <CClimber2
        v-for="climber in climbers"
        :key="climber.name"
        :src="climber"
        :achievements="climber.achievements"
      >
        <template #button>
          <CButton @click="editClimber(climber.id)" class="v-main__button--edit"
            >Editar escalador
          </CButton>
        </template>
      </CClimber2>
      <div class="l-main__button">
        <CButton @click="doLogout" class="v-main__button--out">Log Out</CButton>
        <CButton @click="goNext()" class="v-main__button--add">Añadir Escalador</CButton>
      </div>
    </template>
    <template #footer>
      <CIcon
        iconName="facebook"
        url="https://es-es.facebook.com/"
        value="_blank"
        size="medium"
      ></CIcon>
      <CIcon
        iconName="instagram"
        url="https://www.instagram.com/"
        value="_blank"
        size="medium"
      ></CIcon>
      <CIcon iconName="twitter" url="https://github.com/" value="_blank" size="medium"></CIcon>
    </template>
  </l-main>
</template>

<script>
import LMain from '../layouts/l-main.vue'
// import CClimber from '../components/c-climber.vue'
import CClimber2 from '../components/c-climber2.vue'
import CButton from '../components/c-button.vue'
import CInput from '../components/c-input.vue'
import CIcon from '../components/c-icon.vue'
import { userStore } from '../stores/user'
import { climbersStore } from '../stores/climbers'

export default {
  name: 'MainView',
  components: {
    LMain,
    CButton,
    CClimber2,
    CInput,
    CIcon
  },
  data() {
    return {
      climbers: [],
      isPending: true,
      error: false,
      name: '',
      age: '',
      nationality: ''
    }
  },
  methods: {
    goNext() {
      this.$router.push({ name: 'formClimber' })
    },

    editClimber(id) {
      this.$router.push({ name: 'modifyClimber', params: { id } })
    },
    async doSubmit() {
      try {
        const climber = {
          name: this.name,
          age: this.age,
          nationality: this.nationality,
          achievements: []
        }
        const useClimberStore = climbersStore()
        this.climbers = await useClimberStore.addClimber(climber)
        console.log(this.climbers)
      } catch (e) {
        console.log(e)
      }
    },

    doLogout() {
      const useUserStore = userStore()
      useUserStore.logout()
      this.$router.push({ name: 'login' })
    },
    async getAllClimbers() {
      try {
        const useClimberStore = climbersStore()
        this.climbers = await useClimberStore.fetchClimbers()
        console.log(this.climbers)
        this.isPending = false
      } catch (e) {
        console.log(e)
        this.error = true
      }
    }
  },
  created() {
    this.getAllClimbers()
  }
}
</script>

<style lang="scss" scoped>
.l-main__header--tittle {
  margin-top: 50px;
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
}
.l-main__button {
  display: flex;
  margin-bottom: 50px;
  width: 100%;
}
.v-main__button--out {
  margin-right: auto;
  margin-left: 10px;
}

.v-main__button--add {
  margin-left: auto;
  margin-right: 10px;
}
.v-main__button--edit {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  transition: transform 0.7s ease;
  &:hover {
    background-color: var(--color-text-primary);
    transform: scale(1.2);
  }
}
@media screen and (max-width: 500px) {
  .v-main__button--out {
    margin-right: auto;
    margin-left: 70px;
  }
  .v-main__button--add {
    margin-left: auto;
    margin-right: 70px;
  }
}
</style>
