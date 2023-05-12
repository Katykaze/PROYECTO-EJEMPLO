<template>
  <button class="my-button text-xs-thin" v-bind="$attrs"><slot></slot></button>
</template>

<!-- {{ isSending ? 'Sending' : defaultString }} -->

<script>
export default {
  name: 'CButton',
  inheritAttrs: false
}
</script>
<style lang="scss">
.my-button {
  // font-size: 11px;
  color: var(--color-text-primary);
  font-family: var(--font-family-primary);
  padding: 10px 20px;
  min-width: 60px;
  max-width: 100px;
  background-color: var(--color-button);
  border-radius: 5px;
  cursor: pointer;
  border: none;
  transition: 0.4s;
}
.my-button:hover {
  color: var(--color-text-secondary);
  background-color: var(--color-secondary);
}
</style>
