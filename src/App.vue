<!--EN APP.VUE SE CREA LA INSTANCIA PRINCIPAL DE VUE-->
<template>
 
    <LoginView/>
 
</template>
<script>
//import { createApp } from 'vue'
//import router from './router'
import LoginView from './views/LoginView.vue'
import {defineComponent} from "vue"

import "./styles/pstyle.scss"

export default defineComponent({
  components: {LoginView}
})
//EN APP.VUE SE DEFINE EL LAYOUT
</script>
<style lang="scss">
#app{
  height: 100%;
  background-image: var(--color-background-image);
  background-size: 100%;
  margin: 0 auto;
  display:grid;
  grid-template-columns:  1fr;
  // display: flex;
  // justify-content: center;
  // text-align: center;
  // flex-direction: row;
}
</style>


