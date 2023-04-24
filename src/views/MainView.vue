<template>
  <LMain>
    <template #header>
      <h1>NEW VIEW 🏡🏠</h1>
    </template>
    <template #main>
      <p>HELLOW WOLRD 🌎</p>
      <p>This is a new view</p>
      <CButton :onclick="doLogout">Log Out</CButton>
    </template>
    <template #footer>
      <p>📲 social Media</p>
    </template>
  </LMain>
</template>
<script>
import LMain from '../layouts/l-main.vue'
import CButton from '../components/c-button.vue'
import { userStore } from '../stores/user'

export default {
  name: 'MainView',
  data() {
    return {
      isSending: false
      //   isPending: true
    }
  },
  components: {
    LMain,
    CButton
  },
  methods: {
    doLogout() {
      this.isSending = true
      const useUserStore = userStore()
      useUserStore.logout()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss"></style>
