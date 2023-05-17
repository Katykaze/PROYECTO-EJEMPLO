<template>
  <p class="c-message__p" @animationend="($event) => $event.target.classList.remove('animated')">
    <slot class="c-message__slot"></slot>
  </p>
</template>
<script>
export default {
  name: 'CMessage',

  mounted() {
    const text = document.querySelector('.c-message__p')
    text.classList.add('animated')
  },

  updated() {
    const text = document.querySelector('.c-message__p')
    text.classList.add('animated')
  }
}
</script>
<style lang="scss">
.animated {
  animation: fade-in 0.7s forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
