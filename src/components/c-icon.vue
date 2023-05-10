<template>
  <div class="c-icon">
    <div class="c-icon__wrapper" v-if="url">
      <a :href="url" :target="value">
        <svg
          class="c-icon__svg"
          xmlns="http://www.w3.org/2000/svg"
          :class="additionalClasses"
          :width="width"
          :height="height"
          :viewBox="viewBox"
        >
          <path :d="svgPath"></path>
        </svg>
      </a>
    </div>

    <div class="c-icon_wrapper" v-else>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :class="additionalClasses"
        :width="width"
        :height="height"
        :viewBox="viewBox"
      >
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
    value: {
      type: String
    },
    size:{
      type:String,
      default: 'small'
    }
  },
  computed: {
    svgPath({ src }) {
      return src.svgPath
    },
    width({ src }) {
      return src.width || 24
    },
    height({ src }) {
      return src.height || 24
    },
    viewBox({ width, height }) {
      return `0 0 ${width} ${height}`
    },
    additionalClasses({ size }) {
      const sizes = {
        small: 'icon-small',
        medium: 'icon-medium',
        large: 'icon-large'
      }
      return sizes[size]
    }
  },
  async created() {
    const icon = await import(`../assets/icons/${this.iconName}.js`)
    this.src = { ...icon }
  }
}
</script>
<style lang="scss">
.c-icon__svg {
  fill: var(--color-button);
  transition: 0.3s;
}
.c-icon__svg:hover {
  fill: var(--color-secondary);
}

.icon-small {
  transform: scale(0.8);
}

.icon-medium {
  transform: scale(1);
}

.icon-large {
  transform: scale(1.5);
}
@media screen and (max-width:600px) {
  .icon-medium {
    transform: scale(0.8);
  }
  .icon-small {
  transform: scale(0.5);
}
}
</style>
