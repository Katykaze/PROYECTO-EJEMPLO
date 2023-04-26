<template>
  <main class="c-climber">
    <article class="c-climber__wrapper">
      <section class="c-climber__img">
        <img :src="src.img" alt="foto de escalador" />
      </section>
      <section class="c-climber__info">
        <p class="c-climber__info--name">{{ src.name }}</p>
        <p class="c-climber__info--age">{{ src.age }}</p>
        <p class="c-climber__info--nationality">{{ src.nationality }}</p>
        <div class="c-climber_info--titleAch">
          <strong>Logros:</strong>
        </div>
        <ul
          class="c-climber_info--logros"
          v-for="(achievement, index) in achievements"
          :key="index"
        >
          <li>{{ achievement }}</li>
        </ul>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: 'CClimber',
  props: {
    src: {
      type: Object,
      required: true
    },
    achievements: {
      type: Array,
      required: true
    }
  }
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

.c-climber_info--titleAch {
  margin-top: 20px;
  font-size: 36px;
  font-weight: bold;
}
</style>
