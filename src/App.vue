<!--EN APP.VUE SE CREA LA INSTANCIA PRINCIPAL DE VUE-->
<template>
  <router-view />
</template>
<script>
//import { createApp } from 'vue'
//import router from './router'
import { defineComponent } from 'vue'
import './styles/main.css'
import './styles/pstyle.scss'


export default defineComponent({
  // components: { LoginView }
  name:'app'
})
//EN APP.VUE SE DEFINE EL LAYOUT
</script>
<style lang="scss">
#app {
  height: 100%;
  background-image: var(--color-background-image);
  background-size: 100%;
  margin: 0 auto;
  // display: grid;
  // grid-template-columns: 1fr;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  flex-direction: column;
}
</style>
