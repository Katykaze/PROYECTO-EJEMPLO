<template>
  <button class="my-button" v-bind="$attrs" @click="$emit('myClick')">{{ isSending ? 'Sending' : defaultString }}</button>
</template>

<script>
export default{
    name: 'CButton',
    inheritAttrs:false,
    props:{
      defaultString:{
        type:String,
        default:'Send'
      },
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
  color: antiquewhite;
  padding: 10px 20px;
  width: 150px;
  background-color: var(--color-button);
  border-radius: 5px;
  cursor: pointer;
  
}
.my-button:hover {
  color: rgba(255, 255, 255, 1) !important;
  box-shadow: 0 4px 16px rgba(49, 138, 172, 1);
  transition: all 0.2s ease;
}
</style>
