<!-- eslint-disable vue/no-mutating-props -->
<template>
  <main class="c-climber">
    <article class="c-climber__wrapper">
      <section class="c-climber__img">
        <img :src="src.img" alt="foto de escalador" />
      </section>
      <section class="c-climber__info">
        <p>{{ src.id }}</p>
        <CTextarea
          class="c-climber__info--name text-xxl-bold"
          v-model="src.name"
          :editable="isEditable"
        ></CTextarea>
        <CTextarea
          class="c-climber__info--age text-l-medium"
          v-model="src.age"
          :editable="isEditable"
        ></CTextarea>
        <CTextarea
          class="c-climber__info--nationality text-l-medium"
          v-model="src.nationality"
          :editable="isEditable"
        ></CTextarea>
        <div class="c-climber_info--titleAch">
          <strong>Logros:</strong>
        </div>
        <div v-if="achievements && achievements.length !== 0 && !isSending">
          <ul
            class="c-climber_info--achievements"
            v-for="(achievement, index) in achievements"
            :key="index"
          >
            <li class="text-l-medium">{{ achievement }}</li>
          </ul>
        </div>
        <p v-else class="text-l-medium">No hay Datos disponibles</p>
        <a
          class="c-climber_info--link text-xl-bold"
          v-if="src.link"
          v-bind:href="src.link"
          target="_blank"
          >Más Información</a
        >
        <slot name="button"></slot>
      </section>
    </article>
  </main>
</template>

<script>
import CTextarea from './c-text-area.vue'
export default {
  name: 'CClimber2',
  components: { CTextarea },
  props: {
    src: {
      type: Object,
      required: true
    },
    achievements: {
      type: Array,
      required: false
    },
    isEditable: {
      type: Boolean
    },
    isSending: {
      type: Boolean,
      default: false
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.c-climber__wrapper {
  display: flex;
  gap: 60px;
  justify-content: space-between;
}

.c-climber__img {
  width: 500px;
  height: 400px;
  flex: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.c-climber__info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 2;
}
.c-climber__info:hover {
  border: var(--color-secondary);
  background-color: var(--color-light-secondary);
  opacity: 0.38;
  transition: background 0.3s, opacity 0.3s;
  color: var(--color-text-secondary);
  &.c-climber_info--link {
    // color: var(--color-text-secondary);
    background-color: var(--color-text-secondary);
  }
}

.c-climber_info--titleAch {
  margin-top: 20px;
  // font-size: 36px;
  // font-weight: bold;
}

.c-climber_info--link {
  margin: auto;
  text-decoration: none;
  color: var(--color-text-primary);
  &:hover {
    background-color: var(--color-text-secondary);
    border-radius: 5px;
    padding: 2px;
  }
}

@media only screen and (max-width: 1200px) {
  .c-climber__wrapper {
    flex-direction: column;
  }
  .c-climber__img {
    display: block;
    margin: 0 auto;
  }
  .c-climber__info {
    text-align: center;
    justify-content: center;
    align-items: center;
    // font-size: 1em;
  }
}
</style>
