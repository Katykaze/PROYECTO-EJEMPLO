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
        <div v-if="achievements && achievements.length !== 0">
          <ul
            class="c-climber_info--logros"
            v-for="(achievement, index) in achievements"
            :key="index"
          >
            <li>{{ achievement }}</li>
          </ul>
        </div>
        <p v-else>No hay Datos disponibles</p>
        <a class="c-climber_info--link" v-if="src.link" v-bind:href="src.link" target="_blank"
          >Más Información</a
        >
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
      required: false
    }
  }
}
</script>

<style lang="scss">
.c-climber__wrapper {
  display: flex;
  gap: 60px;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
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
  @media only screen and (max-width: 600px) {
    margin-left: 8%;
  }
}

.c-climber__info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 2;
  @media screen and (max-width: 600px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 1em;
  }
}
.c-climber__info:hover {
  border: var(--color-secondary);
  background-color: var(--color-light-secondary);
  opacity: 0.38;
  transition: background 0.3s, opacity 0.3s;
  color: var(--color-text-secondary);
  cursor: pointer;
}

.c-climber_info--titleAch {
  margin-top: 20px;
  font-size: 36px;
  font-weight: bold;
}

.c-climber_info--container {
  margin-top: 5px;
  font-weight: bold;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  a {
    text-decoration: none;
  }
}
.c-climber_info--container:hover {
  background-color: var(--color-button);

  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 4px 3px var(--color-secondary);
  a {
    color: var(--color-secondary);
  }
}
.c-climber_info--link {
  margin: auto;
  text-decoration: none;
}
</style>
