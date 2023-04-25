<template>
  <div class="v-login__info">
    <span class="v-login__message-info" v-if="isSending">{{ publishedNamedPassword }}</span>
    <span class="v-login__user" v-if="correctUser">{{ userLog }}</span>
    <span class="v-login__error" v-if="showErrorMessage">{{ errorMessage }}</span>
  </div>
  <l-forms>
    <template #form>
      <CInput v-model:src="username" placeholder="Introduce tu nombre" />
      <CInput v-model:src="password" placeholder="Introduce contraseña" type="password" />
    </template>

    <template #button>
      <CButton :onClick="submitData" :isSending="isSending">{{
        isSending ? 'Sending' : 'Send'
      }}</CButton>
    </template>
  </l-forms>
</template>
<script>
import LForms from '../layouts/l-forms.vue'
import CInput from '../components/c-input.vue'
import CButton from '../components/c-button.vue'
import { userStore } from '../stores/user'

export default {
  name: 'Login',
  components: {
    LForms,
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
      return `Welcome ${this.username} Tu contraseña es ${this.password}`
    },
    showErrorMessage() {
      //me devuelve true si NO está vacío
      return this.errorMessage !== ''
    }
  },
  methods: {
    async submitData() {
      if (this.username === '' || this.password === '') {
        return (this.errorMessage = 'Porfavor introduce credenciales')
      }
      const useUserStore = userStore()
      const isLogged = await useUserStore.login({
        username: this.username,
        password: this.password
      })

      if (!isLogged) {
        return (this.errorMessage = 'Credenciales incorrectas')
      }

      this.errorMessage = ''
      this.isSending = true
      this.correctUser = true
      this.$router.push({ name: 'home' })
      // const { username, password } = this.validCredentials
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
}
span[class*='v-login'] {
  margin-top: 200px;
  white-space: pre-line;
}

// media query
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>
