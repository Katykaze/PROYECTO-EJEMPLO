<!-- https://github.com/romainsimon/vue-simple-search-dropdown/blob/master/docs/index.html -->
<template>
  <div class="c-dropdown__wrapper">
    <select
      :name="name"
      @change="selectedOption($event.target.value)"
      :disabled="disabled"
      class="c-dropdown__select text-m-book"
    >
      <option>Elige una opcion</option>
      <option v-for="(option, index) in options" :value="option" :key="index">{{ option }}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'CDropdown',
  props: {
    name: {
      type: String
    },
    options: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectedOption(option) {
      this.$emit('selected', option)
      //console.log(option)
    }
  }
}
</script>
<style lang="scss">
.c-dropdown__wrapper {
  width: 100%;
}
.c-dropdown__select {
  background-color: var(--color-background-input);
  color: var(--color-text-primary);
  cursor: pointer;
  border: none;
  padding: 10px;
  &:hover {
    color: var(--color-text-secondary);
    background-color: var(--color-secondary);
  }
  //esto no me funciona, quiero cambiar la franja del selected en hover
  &::selection {
    color: var(--color-text-secondary);
    background-color: var(--color-secondary);
  }
}
</style>
