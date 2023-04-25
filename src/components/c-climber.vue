<template>
  <div class="c-climber">
    <div class="c-climber__img">
      <img :src="src.img" alt="foto de escalador" />
    </div>
    <div class="c-climber__info">
      <span class="c-climber__info--name">{{ src.name }}</span>
      <span class="c-climber__info--age">{{ src.age }}</span>
      <span class="c-climber__info--nationality">{{ src.nationality }}</span>
      <span class="c-climber__info--achievements">{{ src.achievements }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CClimber',
  props: {
    src: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">

</style>
