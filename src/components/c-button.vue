<template>
  <button v-bind="$attrs" @click="$emit('myClick')">{{ isSending ? 'Sending' : defaultString }}</button>
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
