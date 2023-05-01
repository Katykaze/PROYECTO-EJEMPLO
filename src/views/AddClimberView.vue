<template>
  <l-forms>
    <template #form>
      <CInput v-model:src="img" placeholder="Introduce url de imagen"></CInput>
      <CInput v-model:src="name" placeholder="Introduce nombre"></CInput>
      <CInput v-model:src="age" placeholder="Introduce  edad"></CInput>
      <CInput v-model:src="nationality" placeholder="Introduce nacionalidad"></CInput>
      <p>Añade Logros del escalador</p>
      <CInput v-model:src="achievement" placeholder="Introduce Logro"></CInput>
      <CButton @click="addAchievement()">Añadir</CButton>
      <p v-if="!achievements || achievements.length === 0">No has añadido Logros</p>
      <ul v-else class="v-addClimber__list">
        <li v-for="(achievement, index) in achievements" :key="index">{{ achievement }}</li>
        <CButton @click="removeAchievement(index)">Eliminar</CButton>
      </ul>
    </template>
    <template #button>
      <CButton @click="doSubmit()">Enviar</CButton>
      <CButton @click="goBack()">Atrás</CButton>
    </template>
  </l-forms>
</template>
<script>
import LForms from '../layouts/l-forms.vue'
import CInput from '../components/c-input.vue'
import CButton from '../components/c-button.vue'
import { climbersStore } from '../stores/climbers'

export default {
  name: 'AddClimber',
  components: {
    LForms,
    CInput,
    CButton
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
.my-button {
  margin: auto;
}

.v-addClimber__list {
  text-align: center;
}

.l-forms__form {
  @media screen and (min-width: 600px) {
    //QUIERO COLOCAR LOS DE DOS EN DOS CON FLEX WRAP, PERO NO APLICA ????
    
    flex-wrap: wrap;
    justify-content: space-between;

  }

  @media screen and (max-width: 600px) {
    
    text-align: center;
    align-items: center;
    background: var(--color-background-box-gradient);
    width: 80%;
    font-size: 0.6em;
    color: var(--color-button);
    margin-bottom: 5%;
    border-radius: 10px;
  }
}

.c-input__input {
  @media screen and (max-width: 600px) {
    margin-top: 8%;
    gap: 0px;
  }
}

.l-forms__button {
  @media screen and (max-width: 600px) {
    flex-direction: row;
    width: 80%;
  }

}
</style>
