<!-- https://github.com/romainsimon/vue-simple-search-dropdown/blob/master/docs/index.html -->
<template>
  <div class="v-profile__dropdown">
    <select
      :name="name"
      @change="selectedOption($event.target.value)"
      :disabled="disabled"
      class="v-profile__select text-m-book"
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
      console.log(option)
    }
  }
}
</script>
<style lang="scss">
.v-profile__dropdown {
  display: inline-block;
  width: 100%;
}
.v-profile__select {
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
