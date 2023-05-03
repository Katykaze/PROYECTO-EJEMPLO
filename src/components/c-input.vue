<template>
  <input
    class="c-input__input"
    :type="type"
    :placeholder="placeholder"
    :value="src"
    @input="$emit('update:src', $event.target.value)"
  />
</template>
<script>
export default {
  name: 'CInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    src: {
      type: String
    }
  }
}
</script>
<style lang="scss">
.c-input__input {
  min-height: 40px;
  width: 100%;
  max-width: 300px;
  background-color: var(--color-background-input);
  color: var(--color-text-primary);
  font-family: var(--font-family-primary);
  text-align: center;
  border: 0;
  transition: all 0.2s;
  border-radius: 6px;
  padding: 5px;
}
.c-input__input::placeholder {
  color: var(--color-text-primary);
  font-size: 1.2em;
  text-align: center;
}
.c-input__input:hover {
  box-shadow: 0px 0px 4px 3px var(--color-secondary);
}
.c-input__input:focus {
  outline: none;
}
</style>
