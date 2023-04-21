<template>
  <div class="v-login__info">
    <span v-if="isSending">{{ publishedNamedPassword }}</span>
    <span class="" v-if="correctUser">{{ userLog }}</span>
  </div>
  <l-forms>
    <template #form>
      <CInput v-model:src="username" placeholder="Introduce tu nombre" />
      <CInput v-model:src="password" placeholder="Introduce contraseña" type="password" />
    </template>
  
    <!-- <span class="v-login__error">Error in your credentials</span>  -->
   
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
      isPrinting: true,
      isSending: false,
      userLog: '',
      validCredentials: {
        username: 'katherine',
        password: 'zambrano'
      },
      correctUser: false
    }
  },
  watch: {
    username(value) {
      this.userLog = 'User : ' + value
    }
  },
  computed: {
    publishedNamedPassword() {
      return `Welcome ${this.username} Tu contraseña es ${this.password}`
    }
  },
  methods: {
    submitData() {
      console.log('llamando a la funcion submit()')
      console.log(this.username, this.password)
      if (this.username === '' || this.username === '') {
        this.isPrinting = false
        alert('por favor introduce credenciales')
      } else if (
        this.username !== this.validCredentials.username ||
        this.password !== this.validCredentials.password
      ) {
        this.isPrinting = false
        alert('credenciales incorrectas')
      } else {
        this.isSending = true
        this.correctUser = true
        setTimeout(() => {
          this.isSending = false
        }, 2000)
      }
    }
  }
}
</script>
<style lang="scss">
.v-login__info {
  display: grid;
  place-items: center;
  text-align: center;
  color: var(--color-text-primary);
}
</style>
<!-- metemos expresion ternaria porque con v-if no conseguía -->
<!-- <slot>
          {{ disabled ? 'Cargando' : 'Login' }}
        </slot> -->
// data() { // return { // username: '', // password: '', // validCredentials: { // username:
'katherine', // password: 'zambrano' // } // } // }, // methods: { // submitData() { // if ( //
this.username === this.validCredentials.username && // this.password ===
this.validCredentials.password // ) { // alert('Usuario Correcto') // } else { // alert('Usuario
Incorrecto') // } // } // }
