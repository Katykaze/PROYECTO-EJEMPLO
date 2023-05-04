<template>
  <section class="v-login__info">
    <transition name="fade">
      <span class="v-login__message-info" v-if="isSending">{{ publishedNamedPassword }}</span>
    </transition>
    <!-- <span class="v-login__user" v-if="correctUser">{{ userLog }}</span> -->
    <transition name="fade">
      <span class="v-login__error" v-if="showErrorMessage">{{ errorMessage }}</span>
    </transition>
  </section>

  <section class="v-login__form">
    <CInput v-model:src="username" placeholder="Introduce tu nombre" />
    <CInput v-model:src="password" placeholder="Introduce contraseña" type="password" />

    <CButton :onClick="submitData" :isSending="isSending">{{
      isSending ? 'Sending' : 'Send'
    }}</CButton>
  </section>
</template>
<script>
import CInput from '../components/c-input.vue'
import CButton from '../components/c-button.vue'
import { userStore } from '../stores/user'
//porque en ese archivo pone export const en lugar de export default

export default {
  name: 'LoginView',
  components: {
    CInput,
    CButton
  },
  data() {
    return {
      username: '',
      password: '',
      isSending: false,
      userLog: '',
      correctUser: false,
      errorMessage: ''
    }
  },
  watch: {
    username(value) {
      this.userLog = value
    }
  },
  computed: {
    publishedNamedPassword() {
      return `Bienvenida ${this.username} Tu contraseña es ${this.password}`
    },
    showErrorMessage() {
      //me devuelve true si NO está vacío
      return this.errorMessage !== ''
    }
  },
  methods: {
    async submitData() {
      //hacer desestructuración de objetosd y luego borrar this., s no dentro de login({username: this.username,password: this.password})

      const { username, password } = this
      if (username === '' || password === '') {
        return (this.errorMessage = 'Porfavor introduce credenciales')
      }
      const useUserStore = userStore()
      const isLogged = await useUserStore.login({ username, password })

      if (!isLogged) {
        return (this.errorMessage = 'Credenciales incorrectas')
      }

      this.errorMessage = ''
      this.isSending = true
      this.correctUser = true

      await this.wait(2000)

      this.$router.push({ name: 'home' })
    },
    async wait(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
      })
    }
  }
}
</script>
<style lang="scss">
.v-login__info {
  display: flex;
  justify-content: center;
  text-align: center;
  color: var(--color-text-primary);
  margin-bottom: 40px;
}

.v-login__form {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
