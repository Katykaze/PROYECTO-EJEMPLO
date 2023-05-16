<template>
  <p class="c-message__p"><slot></slot></p>
</template>
<script>
export default {
  name: 'CMessage'
}
</script>
<style lang="scss">
.c-message__p {
  opacity: 0;
  transition: opacity 0.7s ease-in-out;
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
