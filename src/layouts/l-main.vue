<template>
  <section class="l-main">
    <div class="l-main__header">
      <slot name="header"></slot>
    </div>
    <div class="l-main__content">
      <div class="l-main__content--container">
        <slot></slot>
      </div>
    </div>
    <footer class="l-main__footer">
      <slot name="icons"></slot>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'l-main'
}
</script>
<style lang="scss">
.l-main{
    width: 100%;
    background-color: var(--color-background-image);
}
</style>
