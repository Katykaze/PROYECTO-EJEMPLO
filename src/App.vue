<!--EN APP.VUE SE CREA LA INSTANCIA PRINCIPAL DE VUE-->
<template>
  <router-view/>
  <!-- <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
    
        <component :is="Component" :key="$route.fullPath"></component>
     
    </transition>
  </router-view> -->
</template>
<script>
import { createApp } from 'vue'
import router from './router'
import { defineComponent } from 'vue'
import './styles/main.css'
import './styles/pstyle.scss'


export default defineComponent({
  // components: { LoginView }
  name: 'app'
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
  flex-direction: column;
  overflow: auto;
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
