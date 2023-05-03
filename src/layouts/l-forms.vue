<template>
  <main class="l-forms" :class="yellow ? '--yellow' : ''">
    <section class="l-forms__form">
      <slot name="form"></slot>
    </section>
    <section class="l-forms__button">
      <slot name="button"></slot>
    </section>
  </main>
</template>

<script>
export default {
  name: 'l-forms',
  props: {
    yellow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
.l-forms {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow: auto;
  background-color: transparent;
  padding: 60px;
  border-radius: 10px;
}
.l-forms__form {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.l-forms__button {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.--yellow {
  color: black;
  background: var(--color-background-box-gradient);
}
</style>
