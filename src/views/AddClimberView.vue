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
      <ul class="v-addClimber__list" v-else>
        <li  v-for="(achievement, index) in achievements" :key="index">{{ achievement }}</li>
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
        // this.img=''
        // this.name=''
        // this.age=''
        // this.nationality=''
        // this.achievements=[]
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
.my-button{
margin: auto;
}

</style>
