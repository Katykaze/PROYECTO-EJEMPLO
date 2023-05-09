<template>
  <section class="l-main">
    <div class="l-main__header">
      <slot name="header"></slot>
    </div>
    <div class="l-main__content">
      <div class="l-main__content--wrapper">
        <slot name="main"></slot>
      </div>
    </div>
    <footer class="l-main__footer">
      <slot name="footer"></slot>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'l-main'
}
</script>
<style lang="scss">
.l-main {
  background-color: var(--color-background-image);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: auto;
}
.l-main__content {
  flex-grow: 1;
}
.l-main__header,
.l-main__footer {
  flex-shrink: 0;
}
.l-main__content--wrapper {
  display: flex;
  flex-direction: column;
  gap: 60px;
}
.l-main__footer{
  display: flex;
  width: 100%;
  justify-content: center;
  gap:20px
 
}
</style>
