<template>
  <CTextarea v-model="src.name" class="text-l-medium"></CTextarea>
  <CTextarea v-model="src.crag" class="text-l-medium"></CTextarea>
  <CTextarea v-model="src.grade" class="text-l-medium"></CTextarea>
</template>
<script>
import CTextarea from './c-text-area.vue'
export default {
  name: 'CRoute',
  components: { CTextarea },
  props: {
    src: {
      type: Object,
      required: true
    },
    isSending:{
        type:Boolean,
        default:false
    }
  }
}
</script>
