<template>
  <textarea
    class="c-text-area"
    :value="modelValue"
    :readonly="!editable"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>
<script>
export default {
  name: 'CTextarea',
  props: {
    modelValue: {
      type: String
    },
    editable: {
      type: Boolean
    },
    size: {
      type: String,
      default: 'medium'
    },
    placeholder:{
      type:String
    }
  },
  computed: {
    addSizes({ size }) {
      const sizes = {
        small: 'text-small',
        medium: 'text-medium',
        large: 'text-large'
      }
      return sizes[size]
    }
  }
}
</script>
<style>
.c-text-area {
  width: 100%;
  height: 80px;
  border: none;
  background: transparent;
  resize: none;
  font-family: inherit;
  color: inherit;
  line-height: inherit;
}
.text-medium {
}
</style>
