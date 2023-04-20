<template>
  <main>
    <div class="principal-container">
      <!-- v-model="username" -->
      <p v-if="isSending">{{ publishedNamedPassword }}</p>
      <CInput v-model:src="username" placeholder="Introduce tu nombre" />
      <CInput v-model:src="password" placeholder="Introduce contraseña" type="password" />
      <!-- The key here is :onClick which is the equivalent to v-bind:onClick (shorthand) 
        which allows us to bind a JavaScript expression to our onClick prop -->
      <!-- NO SE SUELE COLOCAR CSS EN LINEA , LO MÁS COMÚN ES v-bind:class qu se resumen en :class -->
      <CButton
        :onClick="submitData"
        :class="{ print: isPrinting }"
        class="my-button"
        :isSending="isSending"
      ></CButton>
    </div>
  </main>
</template>
<script>
import CInput from '../components/c-input.vue'
import CButton from '../components/c-button.vue'

export default {
  name: 'Login',
  components: {
    CInput,
    CButton
  },
  data() {
    return {
      username: '',
      password: '',
      isPrinting: true,
      isSending: false
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
      this.isSending = true
    }
  }
}
</script>
<style>
.my-button {
  font-size: 11px;
  padding: 10px 20px;
  width: 150px;
}
main {
  width: 300px;
  height: 300px;
  display: grid;
  place-items: center;
  border: 2px solid blueviolet;
  margin-left: 50px;
  margin-top: 50px;
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
