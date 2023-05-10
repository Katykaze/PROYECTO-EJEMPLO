<template>
  <div class="v-add__principal-container">
    <article class="v-add">
      <section class="v-add__info">
        <CInput v-model:src="img" placeholder="Introduce url de imagen"></CInput>
        <CInput v-model:src="name" placeholder="Introduce nombre"></CInput>
        <CInput v-model:src="age" placeholder="Introduce  edad"></CInput>
        <CInput v-model:src="nationality" placeholder="Introduce nacionalidad"></CInput>
      </section>
      <section class="v-add__achievements">
        <p class="v-add__pharagraph text-l-medium">Añade Logros del escalador</p>
        <CInput v-model:src="achievement" placeholder="Introduce Logro"></CInput>
        <CButton @click="addAchievement()">Añadir</CButton>
      </section>
      <section class="v-add__achievements--list">
        <p v-if="!achievements || achievements.length === 0" class="text-l-medium">No has añadido Logros</p>
        <ul v-else>
          <li v-for="(achievement, index) in achievements" :key="index" class="v-add__achievement text-l-medium">
            {{ achievement }}
            <CButton @click="removeAchievement(index)"><CIcon iconName="paperbin" class="v-add__achievements--icon" size="small"></CIcon></CButton>
          </li>
        </ul>
      </section>
      <section class="v-add__buttons">
        <CButton @click="doSubmit()">Enviar</CButton>
        <CButton @click="goBack()">Atrás</CButton>
      </section>
    </article>
  </div>
</template>
<script>
import CInput from '../components/c-input.vue'
import CButton from '../components/c-button.vue'
import CIcon from '../components/c-icon.vue'
import { climbersStore } from '../stores/climbers'

export default {
  name: 'AddClimber',
  components: {
    CInput,
    CButton,
    CIcon
  },
  data() {
    return {
      img: '',
      name: '',
      age: '',
      nationality: '',
      achievement: '',
      achievements: [],
      climbers: []
    }
  },
  methods: {
    async doSubmit() {
      try {
        const climber = {
          img: this.img,
          name: this.name,
          age: this.age,
          nationality: this.nationality,
          achievement: this.achievement,
          achievements: this.achievements
        }
        const useClimberStore = climbersStore()
        this.climbers = await useClimberStore.addClimber(climber)
        //metodo que copia propiedades d eun objeto a otro
        //con esto conseguimos copiar los datos iniciales al que hay actualmente
        //solo funciona si coincide
        //https://stackoverflow.com/questions/35604987/is-there-a-proper-way-of-resetting-a-components-initial-data-in-vuejs
        Object.assign(this.$data, this.$options.data.apply(this))
      } catch (e) {
        console.log(e)
      }
    },
    goBack() {
      this.$router.go(-1)
    },
    addAchievement() {
      this.achievements.push(this.achievement)
      this.achievement = ''
      console.log(this.achievements)
    },
    removeAchievement(index) {
      this.achievements.splice(index, 1)
    }
  }
}
</script>
<style lang="scss">
.v-add__principal-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-add {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--color-background-box-gradient);
  color: black;
  padding: 40px;
  border-radius: 10px;
  width: 50%;
  height: 50%;
  overflow-y: auto;
  overflow-x: hidden;
}
.v-add__info {
  display: grid;
  grid-auto-rows: 50px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  place-items: center;
  gap: 20px;
}

.v-add__achievements {
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.v-add__input {
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
}

.v-add__achievement {
  display: flex;
  align-items: center;
  gap: 20px;
}

.v-add__achievements--list {
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}

.v-add__buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.v-add__achievements--icon{
  fill:var(--color-text-primary);
  &:hover{
    fill:var(--color-text-secondary)
  }
}
</style>
