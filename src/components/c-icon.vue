<template>
  <div class="c-icon">
    <div class="c-icon__wrapper" v-if="url">
      <a :href="url" :target="value">
        <svg class="c-icon__svg" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :viewBox="viewBox">
          <path :d="svgPath"></path>
        </svg>
      </a>
    </div>

    <div class="c-icon_wrapper" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :viewBox="viewBox">
        <path :d="svgPath"></path>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CIcon',
  data() {
    return {
      src: ''
    }
  },
  props: {
    iconName: {
      type: String
    },
    url: {
      type: String
    },
    value:{
      type: String
    }
  },
  computed: {
    svgPath({ src }) {
      return src.svgPath
    },
    width({ src }) {
      return src.width
    },
    height({ src }) {
      return src.height
    },
   viewBox({ width, height }) {
         return `0 0 ${width} ${height}`
      }
  },
  async created() {
    const icon = await import(`../assets/icons/${this.iconName}.js`)
    this.src = { ...icon }
  }
}
</script>
<style lang="scss">
.c-icon__svg{
   fill: var(--color-button);
   transition: 0.3s;
}
.c-icon__svg:hover{
  fill: var(--color-secondary);
}

</style>
