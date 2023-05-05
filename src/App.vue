<!--EN APP.VUE SE CREA LA INSTANCIA PRINCIPAL DE VUE-->
<template>
  <router-view v-slot="{ Component, route }">
    <transition name="route" mode="out-in">
      <div class="transition-wrapper" :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
</template>
<script>
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
  width: 100%;
  height: 100%;
  background-image: var(--color-background-image);
  background-size: 100%;
}

.transition-wrapper {
  width: 100%;
  height: 100%;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
