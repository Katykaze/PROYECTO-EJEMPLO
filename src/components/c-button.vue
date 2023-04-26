<template>
  <button class="my-button"  v-bind="$attrs" @click="$emit('myClick')"><slot></slot></button>
</template>

<!-- {{ isSending ? 'Sending' : defaultString }} -->

<script>
export default{
    name: 'CButton',
    inheritAttrs:false,
    props:{
      isSending:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      onClick(){
        this.$emit('myClick');
      }
    } 
}
</script>
<style lang="scss">
.my-button {
  font-size: 11px;
  color: var(--color-text-primary);
  font-family: var(--font-family-primary);
  padding: 10px 20px;
  width: 150px;
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
