<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="src"
    @input="$emit('update:src', $event.target.value)"
  />
  <!-- <input
    :type="type"
    :value="src"
    @input="$emit('update:src', $event.target.value)"/> -->
  <!-- :placeholder="placeholder"
  v-bind="$attrs" -->
</template>
<script>
//    inheritAttrs:false,
export default {
  // props:{
  //   type:String,
  //   placeholder:String,
  //   src:String
  // }
  name:"CInput",
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
