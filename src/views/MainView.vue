<template>
  <l-main>
    <template #header>
      <div class="l-main__header--tittle">Top Climbers</div>
    </template>
    <template #main>
      <h2 v-if="error">error</h2>
      <CClimber
        v-for="climber in climbers"
        :key="climber.name"
        :src="climber"
        :achievements="climber.achievements"
      />
      <div class="l-main__main--button">
        <CButton :onclick="doLogout">Log Out</CButton>
      </div>
    </template>
    <template #footer>
      <p>📲 social Media</p>
    </template>
  </l-main>
</template>

<script>
import LMain from '../layouts/l-main.vue'
import CClimber from '../components/c-climber.vue'
import CButton from '../components/c-button.vue'
import { userStore } from '../stores/user'
import { climbersStore } from '../stores/climbers'

export default {
  name: 'MainView',
  components: {
    LMain,
    CButton,
    CClimber
  },
  data() {
    return {
      climbers: [],
      isPending: true,
      error: false
    }
  },
  methods: {
    doLogout() {
      const useUserStore = userStore()
      useUserStore.logout()
      this.$router.push({ name: 'login' })
    },
    async getAllClimbers() {
      try {
        const useClimberStore = climbersStore()
        this.climbers = await useClimberStore.fetchClimbers()
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

<style lang="scss">
.l-main__header--tittle {
  margin-top: 50px;
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 50px;
}
.l-main__main--button{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
</style>
